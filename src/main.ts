import "reflect-metadata";
//AUTO-IMPORT-DOTENV
import "dotenv/config";
import express from "express";
// import { initializeDatabase } from "./Infrastructure/database/initializeDatabase";
//AUTO-IMPORT-CONTAINER
import "./WebApi/container/dependencyContainer";
//AUTO-IMPORT-ROUTES
import auditLogRoutes from "./WebApi/routes/auditLog.routes";
import chatMessageRoutes from "./WebApi/routes/chatMessage.routes";
import reportRoutes from "./WebApi/routes/report.routes";
import scanHistoryRoutes from "./WebApi/routes/scanHistory.routes";
import sensorRoutes from "./WebApi/routes/sensor.routes";
import parcelRoutes from "./WebApi/routes/parcel.routes";
import marketRoutes from "./WebApi/routes/market.routes";
import dashboardMetricRoutes from "./WebApi/routes/dashboardMetric.routes";
import arduinoRoutes from "./WebApi/routes/arduino.routes";
import alertRoutes from "./WebApi/routes/alert.routes";
import catalogRoutes from "./WebApi/routes/catalog.routes";
import userRoutes from "./WebApi/routes/user.routes";
//AUTO-IMPORT-OPENAPI
// import { apiReference } from "@scalar/express-api-reference";
import { OpenApiSpecification } from "./WebApi/docs/openapi";
import authRoutes from "./WebApi/routes/auth.routes";
import { validateToken } from "./WebApi/middlewares/auth.middleware";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//AUTO-REGISTER-OPENAPI
app.get("/api-docs", async (req, res, next) => {
    try {
      const scalar = await import("@scalar/express-api-reference");

      const middleware = scalar.apiReference({
        content: OpenApiSpecification,
      }) as express.RequestHandler;

      return middleware(req, res, next);
    } catch (error) {
      next(error);
    }
  });
//AUTO-REGISTER-ROUTES
app.use("/auth", authRoutes);
app.use("/auditLog", validateToken, auditLogRoutes);
app.use("/chatMessage", validateToken,chatMessageRoutes);
app.use("/report", validateToken, reportRoutes);
app.use("/scanHistory", validateToken, scanHistoryRoutes);
app.use("/sensor", validateToken, sensorRoutes);
app.use("/parcel", validateToken, parcelRoutes);
app.use("/market", validateToken, marketRoutes);
app.use("/dashboardMetric", validateToken, dashboardMetricRoutes);
app.use("/arduino", validateToken, arduinoRoutes);
app.use("/alert", validateToken,alertRoutes);
app.use("/catalog", validateToken, catalogRoutes);
app.use("/user", validateToken, userRoutes);

async function startServer() {
  // await initializeDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();