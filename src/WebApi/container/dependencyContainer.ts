import { container } from "tsyringe";
import { IMarketRepository } from "./../../Domain/repositories/marketRepository.interface";
import { MarketRepository } from "./../../Infrastructure/repositories/market.repository";
import { IMarketService } from "./../../Application/interfaces/market.service.interface";
import { MarketService } from "./../../Application/services/market.service";
import { MarketController } from "./../controllers/market.controller";
import { IDashboardMetricRepository } from "./../../Domain/repositories/dashboardMetricRepository.interface";
import { DashboardMetricRepository } from "./../../Infrastructure/repositories/dashboardMetric.repository";
import { IDashboardMetricService } from "./../../Application/interfaces/dashboardMetric.service.interface";
import { DashboardMetricService } from "./../../Application/services/dashboardMetric.service";
import { DashboardMetricController } from "./../controllers/dashboardMetric.controller";
import { IArduinoRepository } from "./../../Domain/repositories/arduinoRepository.interface";
import { ArduinoRepository } from "./../../Infrastructure/repositories/arduino.repository";
import { IArduinoService } from "./../../Application/interfaces/arduino.service.interface";
import { ArduinoService } from "./../../Application/services/arduino.service";
import { ArduinoController } from "./../controllers/arduino.controller";
import { IAlertRepository } from "./../../Domain/repositories/alertRepository.interface";
import { AlertRepository } from "./../../Infrastructure/repositories/alert.repository";
import { IAlertService } from "./../../Application/interfaces/alert.service.interface";
import { AlertService } from "./../../Application/services/alert.service";
import { AlertController } from "./../controllers/alert.controller";
import { ICatalogRepository } from "./../../Domain/repositories/catalogRepository.interface";
import { CatalogRepository } from "./../../Infrastructure/repositories/catalog.repository";
import { ICatalogService } from "./../../Application/interfaces/catalog.service.interface";
import { CatalogService } from "./../../Application/services/catalog.service";
import { CatalogController } from "./../controllers/catalog.controller";
import { IUserRepository } from "./../../Domain/repositories/userRepository.interface";
import { UserRepository } from "./../../Infrastructure/repositories/user.repository";
import { IUserService } from "./../../Application/interfaces/user.service.interface";
import { UserService } from "./../../Application/services/user.service";
import { UserController } from "./../controllers/user.controller";
//builder, database connection and entity service

// AUTO-GENERATED MODULE REGISTRATIONS
// Market
container.register<IMarketRepository>("IMarketRepository", { useClass: MarketRepository });
container.register<IMarketService>("IMarketService", { useClass: MarketService });
container.register<MarketController>("MarketController", { useClass: MarketController });
// DashboardMetric
container.register<IDashboardMetricRepository>("IDashboardMetricRepository", { useClass: DashboardMetricRepository });
container.register<IDashboardMetricService>("IDashboardMetricService", { useClass: DashboardMetricService });
container.register<DashboardMetricController>("DashboardMetricController", { useClass: DashboardMetricController });
// Arduino
container.register<IArduinoRepository>("IArduinoRepository", { useClass: ArduinoRepository });
container.register<IArduinoService>("IArduinoService", { useClass: ArduinoService });
container.register<ArduinoController>("ArduinoController", { useClass: ArduinoController });
// Alert
container.register<IAlertRepository>("IAlertRepository", { useClass: AlertRepository });
container.register<IAlertService>("IAlertService", { useClass: AlertService });
container.register<AlertController>("AlertController", { useClass: AlertController });
// Catalog
container.register<ICatalogRepository>("ICatalogRepository", { useClass: CatalogRepository });
container.register<ICatalogService>("ICatalogService", { useClass: CatalogService });
container.register<CatalogController>("CatalogController", { useClass: CatalogController });
// User
container.register<IUserRepository>("IUserRepository", { useClass: UserRepository });
container.register<IUserService>("IUserService", { useClass: UserService });
container.register<UserController>("UserController", { useClass: UserController });