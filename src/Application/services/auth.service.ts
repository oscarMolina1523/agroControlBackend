import { inject, injectable } from "tsyringe";
import { IAuthService } from "../interfaces/authService.interface";
import { AuthResult } from "../utils/authResult.type";
import { ServiceResult } from "../utils/serviceResult.type";
import bcrypt from "bcryptjs";
import { UserResponse } from "../dtos/user.response";
import { UserRequest } from "../dtos/user.request";
import { IUserService } from "../interfaces/user.service.interface";
import { UserMapper } from "../mappers/user.mapper";
import { ITokenRepository } from "../../Domain/repositories/tokenRepository.interface";
import { Action } from "../../Domain/entities/action.enum";
import { IAuditLogRepository } from "../../Domain/repositories/auditLogRepository.interface";
import LOGMapper from "../mappers/log.mapper";

@injectable()
export default class AuthService implements IAuthService {
  private readonly _userService: IUserService;
  private readonly _tokenRepository: ITokenRepository;
  private readonly _logRepository: IAuditLogRepository;

  constructor(
    @inject("IUserService") userService: IUserService,
    @inject("ITokenRepository") tokenRepository: ITokenRepository,
    @inject("IAuditLogRepository") logRepository: IAuditLogRepository,
  ) {
    this._userService = userService;
    this._tokenRepository = tokenRepository;
    this._logRepository = logRepository;
  }

  async login(
    email: string,
    password: string,
  ): Promise<AuthResult<UserResponse>> {
    //traer todos los usuarios
    const allUsers = await this._userService.findAll(1, 50);

    //encontrar el usuario con el mismo email
    const user = allUsers.find((item) => item.email == email);

    if (!user) {
      return { message: "Usuario no encontrado" };
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return { message: "Credenciales no validas" };
    }

    const data = UserMapper.toPublic(user);

    const token = this._tokenRepository.generateAccesToken(data);

    const log = LOGMapper.toEntity({
      entity: "Auth",
      entityId: user.id,
      action: Action.LOGIN,
      changes: "Log in User",
      performedBy: user.id,
    });
    await this._logRepository.create(log);
    return { message: "Login exitoso", data: data, token };
  }

  async register(user: UserRequest): Promise<ServiceResult<UserResponse>> {
    //traer todos los usuarios
    const allUsers = await this._userService.findAll(1, 50);

    //encontrar el usuario con el mismo email
    const existing = allUsers.find((item) => item.email == user.email);

    if (existing) {
      return { success: false, message: "El correo ya está registrado" };
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const created = await this._userService.create({
      name: user.username || "user",
      org: "not-found",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlMVANDMsUksR8wR8IgqqvqeZnPysTWnIK5RKApxLOnYhD8oQwBbdKqyU&s=10",
      password: hashedPassword,
      email: user.email,
      role: user.roleId || "ADMIN",
    });

    if (!created) {
      return { success: false, message: "Error al registrar usuario" };
    }

    const log = LOGMapper.toEntity({
      entity: "Auth",
      entityId: created.id,
      action: Action.CREATE,
      changes: "Register User",
      performedBy: created.id,
    });

    await this._logRepository.create(log);

    const now = new Date();

    const response: UserResponse = {
      id: created.id,
      username: created.name,
      email: created.email,
      roleId: created.role,
      active: true,
      departmentId: "not-found",
      createdAt: now,
      updatedAt: now,
      createdBy: "system",
      updatedBy: "system",
    };

    return {
      success: true,
      message: "Usuario registrado exitosamente",
      data: response,
    };
  }

  logout(): string {
    const result = "Se ha cerrado sesión correctamente";
    return result;
  }
}
