export const ArduinoSchemas = {
  ArduinoRequest: {
    type: "object",
    required: [
      
        "name",
      
        "location",
      
        "status",
      
        "baudRate",
      
        "frequency",
      
        "description"
      
    ],
    properties: {
      
      name: { type: "string" },
      
      location: { type: "string" },
      
      status: { type: "string" },
      
      baudRate: { type: "number" },
      
      frequency: { type: "number" },
      
      description: { type: "string" },
      
    }
  },

  Arduino: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      name: { type: "string" },
      
      location: { type: "string" },
      
      status: { type: "string" },
      
      baudRate: { type: "number" },
      
      frequency: { type: "number" },
      
      description: { type: "string" },
      
    }
  }
};
