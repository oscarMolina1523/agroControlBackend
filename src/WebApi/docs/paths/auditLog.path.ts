export const AuditLogPaths = {
  "/auditLog": {
    get: {
      summary: "Get all AuditLog",
      tags: ["AuditLog"],
      parameters: [
        {
          name: "page",
          in: "query",
          required: false,
          schema: {
            type: "integer",
            example: 1
          },
          description: "Page number"
        },
        {
          name: "pageSize",
          in: "query",
          required: false,
          schema: {
            type: "integer",
            example: 100
          },
          description: "Number of records per page"
        }
      ],
      responses: {
        200: {
          description: "List of AuditLog",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/AuditLog" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create AuditLog",
      tags: ["AuditLog"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/AuditLogRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "AuditLog created"
        }
      }
    }
  },

  "/auditLog/{id}": {
    get: {
      summary: "Get AuditLog by id",
      tags: ["AuditLog"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" }
        }
      ],
      responses: {
        200: {
          description: "AuditLog found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/AuditLog" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update AuditLog",
      tags: ["AuditLog"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" }
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/AuditLogRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "AuditLog updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete AuditLog",
      tags: ["AuditLog"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" }
        }
      ],
      responses: {
        204: {
          description: "AuditLog deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
