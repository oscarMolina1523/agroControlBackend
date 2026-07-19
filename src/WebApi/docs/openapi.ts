import { AuditLogSchemas } from "./schemas/auditLog.schema";
import { AuditLogPaths } from "./paths/auditLog.path";
import { ChatMessageSchemas } from "./schemas/chatMessage.schema";
import { ChatMessagePaths } from "./paths/chatMessage.path";
import { ReportSchemas } from "./schemas/report.schema";
import { ReportPaths } from "./paths/report.path";
import { ScanHistorySchemas } from "./schemas/scanHistory.schema";
import { ScanHistoryPaths } from "./paths/scanHistory.path";
import { SensorSchemas } from "./schemas/sensor.schema";
import { SensorPaths } from "./paths/sensor.path";
import { ParcelSchemas } from "./schemas/parcel.schema";
import { ParcelPaths } from "./paths/parcel.path";
import { MarketSchemas } from "./schemas/market.schema";
import { MarketPaths } from "./paths/market.path";
import { DashboardMetricSchemas } from "./schemas/dashboardMetric.schema";
import { DashboardMetricPaths } from "./paths/dashboardMetric.path";
import { ArduinoSchemas } from "./schemas/arduino.schema";
import { ArduinoPaths } from "./paths/arduino.path";
import { AlertSchemas } from "./schemas/alert.schema";
import { AlertPaths } from "./paths/alert.path";
import { CatalogSchemas } from "./schemas/catalog.schema";
import { CatalogPaths } from "./paths/catalog.path";
import { UserSchemas } from "./schemas/user.schema";
import { UserPaths } from "./paths/user.path";
import { AuthPaths } from "./paths/auth.path";
import { AuthSchemas } from "./schemas/auth.schema";
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
    ...AuditLogPaths,
    ...ChatMessagePaths,
    ...ReportPaths,
    ...ScanHistoryPaths,
    ...SensorPaths,
    ...ParcelPaths,
    ...MarketPaths,
    ...DashboardMetricPaths,
    ...ArduinoPaths,
    ...AlertPaths,
    ...CatalogPaths,
    ...UserPaths,
    ...AuthPaths,
  },
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    },
    schemas: {
      ...AuditLogSchemas,
      ...ChatMessageSchemas,
      ...ReportSchemas,
      ...ScanHistorySchemas,
      ...SensorSchemas,
      ...ParcelSchemas,
      ...MarketSchemas,
      ...DashboardMetricSchemas,
      ...ArduinoSchemas,
      ...AlertSchemas,
      ...CatalogSchemas,
      ...UserSchemas,
      ...AuthSchemas,
    }
  }
};