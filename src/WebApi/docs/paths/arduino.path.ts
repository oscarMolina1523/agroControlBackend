export const ArduinoPaths = {
  "/arduino": {
    get: {
      summary: "Get all Arduino",
      tags: ["Arduino"],
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
          description: "List of Arduino",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Arduino" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Arduino",
      tags: ["Arduino"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/ArduinoRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Arduino created"
        }
      }
    }
  },

  "/arduino/{id}": {
    get: {
      summary: "Get Arduino by id",
      tags: ["Arduino"],
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
          description: "Arduino found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Arduino" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Arduino",
      tags: ["Arduino"],
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
            schema: { $ref: "#/components/schemas/ArduinoRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Arduino updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Arduino",
      tags: ["Arduino"],
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
          description: "Arduino deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
