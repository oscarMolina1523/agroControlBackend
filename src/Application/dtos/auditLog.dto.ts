export interface AuditLogDto {
  entity: string;
  entityId: string;
  action: string;
  changes: string;
  performedBy: string;
  performedAt: Date;
}
