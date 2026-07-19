export const SensorSchemas = {
  SensorRequest: {
    type: "object",
    required: [
      
        "name",
      
        "type",
      
        "value",
      
        "numericValue",
      
        "unit",
      
        "location",
      
        "status",
      
        "tone",
      
        "arduinoId"
      
    ],
    properties: {
      
      name: { type: "string" },
      
      type: { type: "string" },
      
      value: { type: "string" },
      
      numericValue: { type: "number" },
      
      unit: { type: "string" },
      
      location: { type: "string" },
      
      status: { type: "string" },
      
      tone: { type: "string" },
      
      arduinoId: { type: "string" },
      
    }
  },

  Sensor: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      name: { type: "string" },
      
      type: { type: "string" },
      
      value: { type: "string" },
      
      numericValue: { type: "number" },
      
      unit: { type: "string" },
      
      location: { type: "string" },
      
      status: { type: "string" },
      
      tone: { type: "string" },
      
      arduinoId: { type: "string" },
      
    }
  }
};
