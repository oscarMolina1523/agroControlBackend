import BaseModel from "./base.model";

export default class AuditLog extends BaseModel {
  entity: string;
  entityId: string;
  action: string;
  changes: string;
  performedBy: string;
  performedAt: Date;

  constructor({
    id,
    entity,
    entityId,
    action,
    changes,
    performedBy,
    performedAt,
  }: {
    id: string;
    entity: string;
    entityId: string;
    action: string;
    changes: string;
    performedBy: string;
    performedAt: Date;
  }) {
    super(id);
    this.entity = entity;
    this.entityId = entityId;
    this.action = action;
    this.changes = changes;
    this.performedBy = performedBy;
    this.performedAt = performedAt;
  }
}
