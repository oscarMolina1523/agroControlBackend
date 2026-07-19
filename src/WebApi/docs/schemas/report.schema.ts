export const ReportSchemas = {
  ReportRequest: {
    type: "object",
    required: [
      
        "resultado",
      
        "cultivo",
      
        "problema",
      
        "causa",
      
        "confianza",
      
        "resumen",
      
        "porQueSucede",
      
        "recomendaciones",
      
        "manejoSugerido",
      
        "comoMejorarLaSalud",
      
        "seguimiento",
      
        "raw",
      
        "userId"
      
    ],
    properties: {
      
      resultado: { type: "string" },
      
      cultivo: { type: "string" },
      
      problema: { type: "string" },
      
      causa: { type: "string" },
      
      confianza: { type: "string" },
      
      resumen: { type: "string" },
      
      porQueSucede: { type: "string" },
      
      recomendaciones: { type: "string" },
      
      manejoSugerido: { type: "string" },
      
      comoMejorarLaSalud: { type: "string" },
      
      seguimiento: { type: "string" },
      
      raw: { type: "string" },
      
      userId: { type: "string" },
      
    }
  },

  Report: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      resultado: { type: "string" },
      
      cultivo: { type: "string" },
      
      problema: { type: "string" },
      
      causa: { type: "string" },
      
      confianza: { type: "string" },
      
      resumen: { type: "string" },
      
      porQueSucede: { type: "string" },
      
      recomendaciones: { type: "string" },
      
      manejoSugerido: { type: "string" },
      
      comoMejorarLaSalud: { type: "string" },
      
      seguimiento: { type: "string" },
      
      raw: { type: "string" },
      
      userId: { type: "string" },
      
    }
  }
};
