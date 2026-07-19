export const UserSchemas = {
  UserRequest: {
    type: "object",
    required: [
      
        "name",
      
        "email",
      
        "org",
      
        "password",
      
        "role",
      
        "picture"
      
    ],
    properties: {
      
      name: { type: "string" },
      
      email: { type: "string" },
      
      org: { type: "string" },
      
      password: { type: "string" },
      
      role: { type: "string" },
      
      picture: { type: "string" },
      
    }
  },

  User: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      name: { type: "string" },
      
      email: { type: "string" },
      
      org: { type: "string" },
      
      password: { type: "string" },
      
      role: { type: "string" },
      
      picture: { type: "string" },
      
    }
  }
};
