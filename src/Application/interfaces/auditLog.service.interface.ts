import AuditLog from "../../Domain/entities/auditLog";
import { AuditLogDto } from './../dtos/auditLog.dto';

export interface IAuditLogService {
  findAll(page: number, pageSize: number): Promise<AuditLog[]>;
  findById(id: string): Promise<AuditLog | null>;
  create(data: AuditLogDto): Promise<AuditLog>;
  update(id: string, data: AuditLogDto): Promise<AuditLog | null>;
  delete(id: string): Promise<void>;
}
