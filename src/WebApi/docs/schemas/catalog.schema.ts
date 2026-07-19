export const CatalogSchemas = {
  CatalogRequest: {
    type: "object",
    required: [
      
        "title",
      
        "author",
      
        "modelPath",
      
        "nutritionalInfo",
      
        "growthPeriod",
      
        "waterRequirements",
      
        "recommendedFertilizers",
      
        "commonDiseases",
      
        "parcels",
      
        "estimatedProduction",
      
        "currentPrice",
      
        "modelType"
      
    ],
    properties: {
      
      title: { type: "string" },
      
      author: { type: "string" },
      
      modelPath: { type: "string" },
      
      nutritionalInfo: { type: "string" },
      
      growthPeriod: { type: "string" },
      
      waterRequirements: { type: "string" },
      
      recommendedFertilizers: { type: "string" },
      
      commonDiseases: { type: "string" },
      
      parcels: { type: "string" },
      
      estimatedProduction: { type: "string" },
      
      currentPrice: { type: "number" },
      
      modelType: { type: "string" },
      
    }
  },

  Catalog: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      title: { type: "string" },
      
      author: { type: "string" },
      
      modelPath: { type: "string" },
      
      nutritionalInfo: { type: "string" },
      
      growthPeriod: { type: "string" },
      
      waterRequirements: { type: "string" },
      
      recommendedFertilizers: { type: "string" },
      
      commonDiseases: { type: "string" },
      
      parcels: { type: "string" },
      
      estimatedProduction: { type: "string" },
      
      currentPrice: { type: "number" },
      
      modelType: { type: "string" },
      
    }
  }
};
