export const ChatMessagePaths = {
  "/chatMessage": {
    get: {
      summary: "Get all ChatMessage",
      tags: ["ChatMessage"],
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
          description: "List of ChatMessage",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/ChatMessage" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create ChatMessage",
      tags: ["ChatMessage"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/ChatMessageRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "ChatMessage created"
        }
      }
    }
  },

  "/chatMessage/{id}": {
    get: {
      summary: "Get ChatMessage by id",
      tags: ["ChatMessage"],
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
          description: "ChatMessage found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ChatMessage" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update ChatMessage",
      tags: ["ChatMessage"],
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
            schema: { $ref: "#/components/schemas/ChatMessageRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "ChatMessage updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete ChatMessage",
      tags: ["ChatMessage"],
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
          description: "ChatMessage deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
