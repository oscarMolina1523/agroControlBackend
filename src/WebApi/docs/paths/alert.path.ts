export const AlertPaths = {
  "/alert": {
    get: {
      summary: "Get all Alert",
      tags: ["Alert"],
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
          description: "List of Alert",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Alert" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Alert",
      tags: ["Alert"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/AlertRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Alert created"
        }
      }
    }
  },

  "/alert/{id}": {
    get: {
      summary: "Get Alert by id",
      tags: ["Alert"],
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
          description: "Alert found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Alert" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Alert",
      tags: ["Alert"],
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
            schema: { $ref: "#/components/schemas/AlertRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Alert updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Alert",
      tags: ["Alert"],
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
          description: "Alert deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
