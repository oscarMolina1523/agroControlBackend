import "reflect-metadata";
//AUTO-IMPORT-DOTENV
import "dotenv/config";
import express from "express";
// import { initializeDatabase } from "./Infrastructure/database/initializeDatabase";
//AUTO-IMPORT-CONTAINER
import "./WebApi/container/dependencyContainer";
//AUTO-IMPORT-ROUTES
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
app.use("/chatMessage", chatMessageRoutes);
app.use("/report", reportRoutes);
app.use("/scanHistory", scanHistoryRoutes);
app.use("/sensor", sensorRoutes);
app.use("/parcel", parcelRoutes);
app.use("/market", marketRoutes);
app.use("/dashboardMetric", dashboardMetricRoutes);
app.use("/arduino", arduinoRoutes);
app.use("/alert", alertRoutes);
app.use("/catalog", catalogRoutes);
app.use("/user", userRoutes);

async function startServer() {
  // await initializeDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();