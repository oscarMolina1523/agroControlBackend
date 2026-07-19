import { inject, injectable } from "tsyringe";
import { IAuditLogService } from "../interfaces/auditLog.service.interface";
import { IAuditLogRepository } from "../../Domain/repositories/auditLogRepository.interface";
import { AuditLogDto } from "../dtos/auditLog.dto";
import AuditLog from "../../Domain/entities/auditLog";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class AuditLogService implements IAuditLogService {
  private readonly _auditLogRepository: IAuditLogRepository;

  constructor(@inject("IAuditLogRepository") repository: IAuditLogRepository) {
    this._auditLogRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<AuditLog[]> {
    return await this._auditLogRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<AuditLog | null> {
    return await this._auditLogRepository.findById(id);
  }
  
  async create(data: AuditLogDto): Promise<AuditLog> {
    const newData: AuditLog = {
      ...data,
      id: generateId(), 
    }
    await this._auditLogRepository.create(newData);
    return newData;
  }

  async update(id: string, data: AuditLogDto): Promise<AuditLog | null> {
    const existing = await this._auditLogRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: AuditLog = {
      ...data,
      id,
    }
    await this._auditLogRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._auditLogRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._auditLogRepository.delete(existing);
  }
}
