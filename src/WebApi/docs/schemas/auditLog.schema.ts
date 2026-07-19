export const AuditLogSchemas = {
  AuditLogRequest: {
    type: "object",
    required: [
      
        "entity",
      
        "entityId",
      
        "action",
      
        "changes",
      
        "performedBy",
      
        "performedAt"
      
    ],
    properties: {
      
      entity: { type: "string" },
      
      entityId: { type: "string" },
      
      action: { type: "string" },
      
      changes: { type: "string" },
      
      performedBy: { type: "string" },
      
      performedAt: { type: "string" },
      
    }
  },

  AuditLog: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      entity: { type: "string" },
      
      entityId: { type: "string" },
      
      action: { type: "string" },
      
      changes: { type: "string" },
      
      performedBy: { type: "string" },
      
      performedAt: { type: "string" },
      
    }
  }
};
