export const SensorPaths = {
  "/sensor": {
    get: {
      summary: "Get all Sensor",
      tags: ["Sensor"],
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
          description: "List of Sensor",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Sensor" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Sensor",
      tags: ["Sensor"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/SensorRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Sensor created"
        }
      }
    }
  },

  "/sensor/{id}": {
    get: {
      summary: "Get Sensor by id",
      tags: ["Sensor"],
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
          description: "Sensor found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Sensor" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Sensor",
      tags: ["Sensor"],
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
            schema: { $ref: "#/components/schemas/SensorRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Sensor updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Sensor",
      tags: ["Sensor"],
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
          description: "Sensor deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
