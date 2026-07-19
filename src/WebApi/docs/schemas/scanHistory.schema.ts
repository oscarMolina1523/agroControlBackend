export const ScanHistorySchemas = {
  ScanHistoryRequest: {
    type: "object",
    required: [
      
        "fileName",
      
        "resultText",
      
        "createdAt",
      
        "imageUrl",
      
        "userId"
      
    ],
    properties: {
      
      fileName: { type: "string" },
      
      resultText: { type: "string" },
      
      createdAt: { type: "string" },
      
      imageUrl: { type: "string" },
      
      userId: { type: "string" },
      
    }
  },

  ScanHistory: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      fileName: { type: "string" },
      
      resultText: { type: "string" },
      
      createdAt: { type: "string" },
      
      imageUrl: { type: "string" },
      
      userId: { type: "string" },
      
    }
  }
};
