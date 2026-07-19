export const ParcelSchemas = {
  ParcelRequest: {
    type: "object",
    required: [
      
        "name",
      
        "area",
      
        "status",
      
        "statusTone",
      
        "humidity",
      
        "fertility",
      
        "temperature",
      
        "bounds",
      
        "center",
      
        "soilHistory",
      
        "historicalData",
      
        "cropId",
      
        "sowingDate",
      
        "expectedProduction"
      
    ],
    properties: {
      
      name: { type: "string" },
      
      area: { type: "string" },
      
      status: { type: "string" },
      
      statusTone: { type: "string" },
      
      humidity: { type: "string" },
      
      fertility: { type: "string" },
      
      temperature: { type: "string" },
      
      bounds: { type: "string" },
      
      center: { type: "string" },
      
      soilHistory: { type: "string" },
      
      historicalData: { type: "string" },
      
      cropId: { type: "string" },
      
      sowingDate: { type: "string" },
      
      expectedProduction: { type: "string" },
      
    }
  },

  Parcel: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      name: { type: "string" },
      
      area: { type: "string" },
      
      status: { type: "string" },
      
      statusTone: { type: "string" },
      
      humidity: { type: "string" },
      
      fertility: { type: "string" },
      
      temperature: { type: "string" },
      
      bounds: { type: "string" },
      
      center: { type: "string" },
      
      soilHistory: { type: "string" },
      
      historicalData: { type: "string" },
      
      cropId: { type: "string" },
      
      sowingDate: { type: "string" },
      
      expectedProduction: { type: "string" },
      
    }
  }
};
