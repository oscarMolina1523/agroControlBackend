export const AlertSchemas = {
  AlertRequest: {
    type: "object",
    required: [
      
        "emoji",
      
        "title",
      
        "description",
      
        "time",
      
        "severity",
      
        "resolved",
      
        "source",
      
        "targetPage",
      
        "targetId"
      
    ],
    properties: {
      
      emoji: { type: "string" },
      
      title: { type: "string" },
      
      description: { type: "string" },
      
      time: { type: "string" },
      
      severity: { type: "string" },
      
      resolved: { type: "string" },
      
      source: { type: "string" },
      
      targetPage: { type: "string" },
      
      targetId: { type: "string" },
      
    }
  },

  Alert: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      emoji: { type: "string" },
      
      title: { type: "string" },
      
      description: { type: "string" },
      
      time: { type: "string" },
      
      severity: { type: "string" },
      
      resolved: { type: "string" },
      
      source: { type: "string" },
      
      targetPage: { type: "string" },
      
      targetId: { type: "string" },
      
    }
  }
};
