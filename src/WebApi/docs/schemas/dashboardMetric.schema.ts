export const DashboardMetricSchemas = {
  DashboardMetricRequest: {
    type: "object",
    required: [
      
        "label",
      
        "value",
      
        "percentage",
      
        "description",
      
        "color",
      
        "chartData",
      
        "icon"
      
    ],
    properties: {
      
      label: { type: "string" },
      
      value: { type: "string" },
      
      percentage: { type: "number" },
      
      description: { type: "string" },
      
      color: { type: "string" },
      
      chartData: { type: "string" },
      
      icon: { type: "string" },
      
    }
  },

  DashboardMetric: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      label: { type: "string" },
      
      value: { type: "string" },
      
      percentage: { type: "number" },
      
      description: { type: "string" },
      
      color: { type: "string" },
      
      chartData: { type: "string" },
      
      icon: { type: "string" },
      
    }
  }
};
