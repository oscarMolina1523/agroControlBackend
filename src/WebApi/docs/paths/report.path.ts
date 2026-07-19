export const ReportPaths = {
  "/report": {
    get: {
      summary: "Get all Report",
      tags: ["Report"],
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
          description: "List of Report",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Report" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Report",
      tags: ["Report"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/ReportRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Report created"
        }
      }
    }
  },

  "/report/{id}": {
    get: {
      summary: "Get Report by id",
      tags: ["Report"],
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
          description: "Report found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Report" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Report",
      tags: ["Report"],
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
            schema: { $ref: "#/components/schemas/ReportRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Report updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Report",
      tags: ["Report"],
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
          description: "Report deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
