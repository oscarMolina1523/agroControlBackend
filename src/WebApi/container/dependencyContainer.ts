import { container } from "tsyringe";
import { IAuditLogRepository } from "./../../Domain/repositories/auditLogRepository.interface";
import { AuditLogRepository } from "./../../Infrastructure/repositories/auditLog.repository";
import { IAuditLogService } from "./../../Application/interfaces/auditLog.service.interface";
import { AuditLogService } from "./../../Application/services/auditLog.service";
import { AuditLogController } from "./../controllers/auditLog.controller";
import { IChatMessageRepository } from "./../../Domain/repositories/chatMessageRepository.interface";
import { ChatMessageRepository } from "./../../Infrastructure/repositories/chatMessage.repository";
import { IChatMessageService } from "./../../Application/interfaces/chatMessage.service.interface";
import { ChatMessageService } from "./../../Application/services/chatMessage.service";
import { ChatMessageController } from "./../controllers/chatMessage.controller";
import { IReportRepository } from "./../../Domain/repositories/reportRepository.interface";
import { ReportRepository } from "./../../Infrastructure/repositories/report.repository";
import { IReportService } from "./../../Application/interfaces/report.service.interface";
import { ReportService } from "./../../Application/services/report.service";
import { ReportController } from "./../controllers/report.controller";
import { IScanHistoryRepository } from "./../../Domain/repositories/scanHistoryRepository.interface";
import { ScanHistoryRepository } from "./../../Infrastructure/repositories/scanHistory.repository";
import { IScanHistoryService } from "./../../Application/interfaces/scanHistory.service.interface";
import { ScanHistoryService } from "./../../Application/services/scanHistory.service";
import { ScanHistoryController } from "./../controllers/scanHistory.controller";
import { ISensorRepository } from "./../../Domain/repositories/sensorRepository.interface";
import { SensorRepository } from "./../../Infrastructure/repositories/sensor.repository";
import { ISensorService } from "./../../Application/interfaces/sensor.service.interface";
import { SensorService } from "./../../Application/services/sensor.service";
import { SensorController } from "./../controllers/sensor.controller";
import { IParcelRepository } from "./../../Domain/repositories/parcelRepository.interface";
import { ParcelRepository } from "./../../Infrastructure/repositories/parcel.repository";
import { IParcelService } from "./../../Application/interfaces/parcel.service.interface";
import { ParcelService } from "./../../Application/services/parcel.service";
import { ParcelController } from "./../controllers/parcel.controller";
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
import { ISingletonSqlConnection } from '../../Infrastructure/interface/dbConnection.interface';
import { SingletonSqlConnection } from '../../Infrastructure/database/dbConnection';
import { ISqlCommandOperationBuilder } from "../../Infrastructure/interface/sqlCommandOperation.interface";
import { SqlCommandOperationBuilder } from "../../Infrastructure/builders/sqlCommandOperation.builder";
import { EntitiesService } from "../../Infrastructure/services/entities.service";
import { IEntitiesService } from "../../Infrastructure/interface/entitiesService.interface";
//builder, database connection and entity service
container.registerSingleton<ISingletonSqlConnection>('ISingletonSqlConnection', SingletonSqlConnection);
container.register<ISqlCommandOperationBuilder>('IOperationBuilder', { useClass: SqlCommandOperationBuilder });
container.registerSingleton<IEntitiesService>('IEntityService', EntitiesService);

// AUTO-GENERATED MODULE REGISTRATIONS
// AuditLog
container.register<IAuditLogRepository>("IAuditLogRepository", { useClass: AuditLogRepository });
container.register<IAuditLogService>("IAuditLogService", { useClass: AuditLogService });
container.register<AuditLogController>("AuditLogController", { useClass: AuditLogController });
// ChatMessage
container.register<IChatMessageRepository>("IChatMessageRepository", { useClass: ChatMessageRepository });
container.register<IChatMessageService>("IChatMessageService", { useClass: ChatMessageService });
container.register<ChatMessageController>("ChatMessageController", { useClass: ChatMessageController });
// Report
container.register<IReportRepository>("IReportRepository", { useClass: ReportRepository });
container.register<IReportService>("IReportService", { useClass: ReportService });
container.register<ReportController>("ReportController", { useClass: ReportController });
// ScanHistory
container.register<IScanHistoryRepository>("IScanHistoryRepository", { useClass: ScanHistoryRepository });
container.register<IScanHistoryService>("IScanHistoryService", { useClass: ScanHistoryService });
container.register<ScanHistoryController>("ScanHistoryController", { useClass: ScanHistoryController });
// Sensor
container.register<ISensorRepository>("ISensorRepository", { useClass: SensorRepository });
container.register<ISensorService>("ISensorService", { useClass: SensorService });
container.register<SensorController>("SensorController", { useClass: SensorController });
// Parcel
container.register<IParcelRepository>("IParcelRepository", { useClass: ParcelRepository });
container.register<IParcelService>("IParcelService", { useClass: ParcelService });
container.register<ParcelController>("ParcelController", { useClass: ParcelController });
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