import { ArduinoSchemas } from "./schemas/arduino.schema";
import { ArduinoPaths } from "./paths/arduino.path";
import { AlertSchemas } from "./schemas/alert.schema";
import { AlertPaths } from "./paths/alert.path";
import { CatalogSchemas } from "./schemas/catalog.schema";
import { CatalogPaths } from "./paths/catalog.path";
import { UserSchemas } from "./schemas/user.schema";
import { UserPaths } from "./paths/user.path";
export const OpenApiSpecification = {
  openapi: "3.0.0",
  info: {
    title: "My API",
    version: "1.0.0",
    description: "Auto-generated API documentation"
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local server"
    }
  ],
  paths: {
    ...ArduinoPaths,
    ...AlertPaths,
    ...CatalogPaths,
    ...UserPaths,},
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    },
    schemas: {
      ...ArduinoSchemas,
      ...AlertSchemas,
      ...CatalogSchemas,
      ...UserSchemas,}
  }
};