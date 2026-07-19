
import User from "../../Domain/entities/user";
import { generateId } from "../../shared/utils/generateId";
import { UserRequest } from "../dtos/user.request";
import { UserResponse } from "../dtos/user.response";

export class UserMapper {
  static toEntity(dto: UserRequest): User {

    return new User({
      id: generateId(),
      name: dto.username ?? dto.email.split("@")[0],
      email: dto.email,
      password: dto.password,
      role: dto.roleId ?? "r-viewer",
      org: "system",
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlMVANDMsUksR8wR8IgqqvqeZnPysTWnIK5RKApxLOnYhD8oQwBbdKqyU&s=10"
    });
  }

  static updateEntity(
    existing: User,
    dto: UserRequest,
  ): User {

    return({
      ...existing, // mantiene id, createdAt, createdBy, etc.
      name: dto.username ?? existing.name,
      email: dto.email ?? existing.email,
      password: dto.password?.trim() ? dto.password : existing.password,
      role: dto.roleId ?? existing.role,
    });
  }

  static toPublic(user: User): UserResponse {

    const now = new Date();

    return {
      id: user.id,
      username: user.name,
      email: user.email,
      roleId: user.role,
      active: true,
      departmentId: "not-found",
      createdAt: now,
      updatedAt: now,
      createdBy: "system",
      updatedBy: "system",
    };
  }
}