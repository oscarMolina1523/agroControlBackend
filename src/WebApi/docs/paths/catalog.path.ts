export const CatalogPaths = {
  "/catalog": {
    get: {
      summary: "Get all Catalog",
      tags: ["Catalog"],
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
          description: "List of Catalog",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Catalog" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Catalog",
      tags: ["Catalog"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/CatalogRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Catalog created"
        }
      }
    }
  },

  "/catalog/{id}": {
    get: {
      summary: "Get Catalog by id",
      tags: ["Catalog"],
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
          description: "Catalog found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Catalog" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Catalog",
      tags: ["Catalog"],
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
            schema: { $ref: "#/components/schemas/CatalogRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Catalog updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Catalog",
      tags: ["Catalog"],
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
          description: "Catalog deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
