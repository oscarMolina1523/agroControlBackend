export const ScanHistoryPaths = {
  "/scanHistory": {
    get: {
      summary: "Get all ScanHistory",
      tags: ["ScanHistory"],
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
          description: "List of ScanHistory",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/ScanHistory" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create ScanHistory",
      tags: ["ScanHistory"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/ScanHistoryRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "ScanHistory created"
        }
      }
    }
  },

  "/scanHistory/{id}": {
    get: {
      summary: "Get ScanHistory by id",
      tags: ["ScanHistory"],
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
          description: "ScanHistory found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ScanHistory" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update ScanHistory",
      tags: ["ScanHistory"],
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
            schema: { $ref: "#/components/schemas/ScanHistoryRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "ScanHistory updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete ScanHistory",
      tags: ["ScanHistory"],
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
          description: "ScanHistory deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
