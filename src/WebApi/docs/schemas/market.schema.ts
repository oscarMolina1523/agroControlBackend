export const MarketSchemas = {
  MarketRequest: {
    type: "object",
    required: [
      
        "name",
      
        "description",
      
        "price",
      
        "status",
      
        "category",
      
        "imageUrl",
      
        "entityId",
      
        "startingPrice",
      
        "currentBid",
      
        "highestBidderId",
      
        "bidCount",
      
        "createdAt",
      
        "endDate",
      
        "lotSize",
      
        "unit"
      
    ],
    properties: {
      
      name: { type: "string" },
      
      description: { type: "string" },
      
      price: { type: "number" },
      
      status: { type: "string" },
      
      category: { type: "string" },
      
      imageUrl: { type: "string" },
      
      entityId: { type: "string" },
      
      startingPrice: { type: "number" },
      
      currentBid: { type: "number" },
      
      highestBidderId: { type: "string" },
      
      bidCount: { type: "number" },
      
      createdAt: { type: "string" },
      
      endDate: { type: "string" },
      
      lotSize: { type: "number" },
      
      unit: { type: "string" },
      
    }
  },

  Market: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      name: { type: "string" },
      
      description: { type: "string" },
      
      price: { type: "number" },
      
      status: { type: "string" },
      
      category: { type: "string" },
      
      imageUrl: { type: "string" },
      
      entityId: { type: "string" },
      
      startingPrice: { type: "number" },
      
      currentBid: { type: "number" },
      
      highestBidderId: { type: "string" },
      
      bidCount: { type: "number" },
      
      createdAt: { type: "string" },
      
      endDate: { type: "string" },
      
      lotSize: { type: "number" },
      
      unit: { type: "string" },
      
    }
  }
};
