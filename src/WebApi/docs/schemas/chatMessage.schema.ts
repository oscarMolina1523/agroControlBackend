export const ChatMessageSchemas = {
  ChatMessageRequest: {
    type: "object",
    required: [
      
        "role",
      
        "text",
      
        "timestamp",
      
        "userId"
      
    ],
    properties: {
      
      role: { type: "string" },
      
      text: { type: "string" },
      
      timestamp: { type: "number" },
      
      userId: { type: "string" },
      
    }
  },

  ChatMessage: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      role: { type: "string" },
      
      text: { type: "string" },
      
      timestamp: { type: "number" },
      
      userId: { type: "string" },
      
    }
  }
};
