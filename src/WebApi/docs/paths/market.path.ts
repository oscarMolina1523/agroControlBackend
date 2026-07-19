export const MarketPaths = {
  "/market": {
    get: {
      summary: "Get all Market",
      tags: ["Market"],
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
          description: "List of Market",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Market" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Market",
      tags: ["Market"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/MarketRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Market created"
        }
      }
    }
  },

  "/market/{id}": {
    get: {
      summary: "Get Market by id",
      tags: ["Market"],
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
          description: "Market found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Market" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Market",
      tags: ["Market"],
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
            schema: { $ref: "#/components/schemas/MarketRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Market updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Market",
      tags: ["Market"],
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
          description: "Market deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
