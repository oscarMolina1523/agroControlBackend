import AuditLog from '../entities/auditLog';

export interface IAuditLogRepository {
  findAll(page: number, pageSize: number): Promise<AuditLog[]>;
  findById(id: string): Promise<AuditLog | null>;
  create(data: AuditLog): Promise<void>;
  update(data: AuditLog): Promise<void>;
  delete(data: AuditLog): Promise<void>;
}
