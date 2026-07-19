export const DashboardMetricPaths = {
  "/dashboardMetric": {
    get: {
      summary: "Get all DashboardMetric",
      tags: ["DashboardMetric"],
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
          description: "List of DashboardMetric",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/DashboardMetric" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create DashboardMetric",
      tags: ["DashboardMetric"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/DashboardMetricRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "DashboardMetric created"
        }
      }
    }
  },

  "/dashboardMetric/{id}": {
    get: {
      summary: "Get DashboardMetric by id",
      tags: ["DashboardMetric"],
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
          description: "DashboardMetric found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/DashboardMetric" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update DashboardMetric",
      tags: ["DashboardMetric"],
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
            schema: { $ref: "#/components/schemas/DashboardMetricRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "DashboardMetric updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete DashboardMetric",
      tags: ["DashboardMetric"],
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
          description: "DashboardMetric deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
