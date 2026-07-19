export const ParcelPaths = {
  "/parcel": {
    get: {
      summary: "Get all Parcel",
      tags: ["Parcel"],
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
          description: "List of Parcel",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Parcel" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Parcel",
      tags: ["Parcel"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/ParcelRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Parcel created"
        }
      }
    }
  },

  "/parcel/{id}": {
    get: {
      summary: "Get Parcel by id",
      tags: ["Parcel"],
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
          description: "Parcel found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Parcel" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Parcel",
      tags: ["Parcel"],
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
            schema: { $ref: "#/components/schemas/ParcelRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Parcel updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Parcel",
      tags: ["Parcel"],
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
          description: "Parcel deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
