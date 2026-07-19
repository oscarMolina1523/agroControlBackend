import { EntityType } from "../utils/entityTypes";
import {
  SqlEntitySettings,
  SqlColumnSettings,
} from "../builders/sqlEntitySettings";
import { IEntitiesService } from "../interface/entitiesService.interface";
import { injectable } from "tsyringe";

@injectable()
export class EntitiesService implements IEntitiesService {
  private entities = new Map<EntityType, SqlEntitySettings>();

  constructor() {
    this.buildEntities();
  }

  GetSettings(type: EntityType): SqlEntitySettings {
    const settings = this.entities.get(type);
    if (!settings) {
      throw new Error(`Entidad no encontrada: ${type}`);
    }
    return settings;
  }

  private buildEntities(): void {
        this.entities.set(EntityType.User, this.getUserSettings());
    this.entities.set(EntityType.Catalog, this.getCatalogSettings());
    this.entities.set(EntityType.Alert, this.getAlertSettings());
    this.entities.set(EntityType.Arduino, this.getArduinoSettings());
    this.entities.set(EntityType.DashboardMetric, this.getDashboardMetricSettings());
    this.entities.set(EntityType.Market, this.getMarketSettings());
    this.entities.set(EntityType.Parcel, this.getParcelSettings());
    this.entities.set(EntityType.Sensor, this.getSensorSettings());
    this.entities.set(EntityType.ScanHistory, this.getScanHistorySettings());
    this.entities.set(EntityType.Report, this.getReportSettings());
    this.entities.set(EntityType.ChatMessage, this.getChatMessageSettings());
  }

  

    
  private getUserSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("EMAIL", "email", false),
            new SqlColumnSettings("ORG", "org", false),
            new SqlColumnSettings("PASSWORD", "password", false),
            new SqlColumnSettings("ROLE", "role", false),
            new SqlColumnSettings("PICTURE", "picture", false),
        ];
    return new SqlEntitySettings("USERS", columns);
  }

  private getCatalogSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("TITLE", "title", false),
            new SqlColumnSettings("AUTHOR", "author", false),
            new SqlColumnSettings("MODELPATH", "modelPath", false),
            new SqlColumnSettings("NUTRITIONALINFO", "nutritionalInfo", false),
            new SqlColumnSettings("GROWTHPERIOD", "growthPeriod", false),
            new SqlColumnSettings("WATERREQUIREMENTS", "waterRequirements", false),
            new SqlColumnSettings("RECOMMENDEDFERTILIZERS", "recommendedFertilizers", false),
            new SqlColumnSettings("COMMONDISEASES", "commonDiseases", false),
            new SqlColumnSettings("PARCELS", "parcels", false),
            new SqlColumnSettings("ESTIMATEDPRODUCTION", "estimatedProduction", false),
            new SqlColumnSettings("CURRENTPRICE", "currentPrice", false),
            new SqlColumnSettings("MODELTYPE", "modelType", false),
        ];
    return new SqlEntitySettings("CATALOGS", columns);
  }

  private getAlertSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("EMOJI", "emoji", false),
            new SqlColumnSettings("TITLE", "title", false),
            new SqlColumnSettings("DESCRIPTION", "description", false),
            new SqlColumnSettings("TIME", "time", false),
            new SqlColumnSettings("SEVERITY", "severity", false),
            new SqlColumnSettings("RESOLVED", "resolved", false),
            new SqlColumnSettings("SOURCE", "source", false),
            new SqlColumnSettings("TARGETPAGE", "targetPage", false),
            new SqlColumnSettings("TARGETID", "targetId", false),
        ];
    return new SqlEntitySettings("ALERTS", columns);
  }

  private getArduinoSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("LOCATION", "location", false),
            new SqlColumnSettings("STATUS", "status", false),
            new SqlColumnSettings("BAUDRATE", "baudRate", false),
            new SqlColumnSettings("FREQUENCY", "frequency", false),
            new SqlColumnSettings("DESCRIPTION", "description", false),
        ];
    return new SqlEntitySettings("ARDUINOS", columns);
  }

  private getDashboardMetricSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("LABEL", "label", false),
            new SqlColumnSettings("VALUE", "value", false),
            new SqlColumnSettings("PERCENTAGE", "percentage", false),
            new SqlColumnSettings("DESCRIPTION", "description", false),
            new SqlColumnSettings("COLOR", "color", false),
            new SqlColumnSettings("CHARTDATA", "chartData", false),
            new SqlColumnSettings("ICON", "icon", false),
        ];
    return new SqlEntitySettings("DASHBOARDMETRICS", columns);
  }

  private getMarketSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("DESCRIPTION", "description", false),
            new SqlColumnSettings("PRICE", "price", false),
            new SqlColumnSettings("STATUS", "status", false),
            new SqlColumnSettings("CATEGORY", "category", false),
            new SqlColumnSettings("IMAGEURL", "imageUrl", false),
            new SqlColumnSettings("ENTITYID", "entityId", false),
            new SqlColumnSettings("STARTINGPRICE", "startingPrice", false),
            new SqlColumnSettings("CURRENTBID", "currentBid", false),
            new SqlColumnSettings("HIGHESTBIDDERID", "highestBidderId", false),
            new SqlColumnSettings("BIDCOUNT", "bidCount", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("ENDDATE", "endDate", false),
            new SqlColumnSettings("LOTSIZE", "lotSize", false),
            new SqlColumnSettings("UNIT", "unit", false),
        ];
    return new SqlEntitySettings("MARKETS", columns);
  }

  private getParcelSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("AREA", "area", false),
            new SqlColumnSettings("STATUS", "status", false),
            new SqlColumnSettings("STATUSTONE", "statusTone", false),
            new SqlColumnSettings("HUMIDITY", "humidity", false),
            new SqlColumnSettings("FERTILITY", "fertility", false),
            new SqlColumnSettings("TEMPERATURE", "temperature", false),
            new SqlColumnSettings("BOUNDS", "bounds", false),
            new SqlColumnSettings("CENTER", "center", false),
            new SqlColumnSettings("SOILHISTORY", "soilHistory", false),
            new SqlColumnSettings("HISTORICALDATA", "historicalData", false),
            new SqlColumnSettings("CROPID", "cropId", false),
            new SqlColumnSettings("SOWINGDATE", "sowingDate", false),
            new SqlColumnSettings("EXPECTEDPRODUCTION", "expectedProduction", false),
        ];
    return new SqlEntitySettings("PARCELS", columns);
  }

  private getSensorSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("TYPE", "type", false),
            new SqlColumnSettings("VALUE", "value", false),
            new SqlColumnSettings("NUMERICVALUE", "numericValue", false),
            new SqlColumnSettings("UNIT", "unit", false),
            new SqlColumnSettings("LOCATION", "location", false),
            new SqlColumnSettings("STATUS", "status", false),
            new SqlColumnSettings("TONE", "tone", false),
            new SqlColumnSettings("ARDUINOID", "arduinoId", false),
        ];
    return new SqlEntitySettings("SENSORS", columns);
  }

  private getScanHistorySettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("FILENAME", "fileName", false),
            new SqlColumnSettings("RESULTTEXT", "resultText", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("IMAGEURL", "imageUrl", false),
            new SqlColumnSettings("USERID", "userId", false),
        ];
    return new SqlEntitySettings("SCANHISTORIES", columns);
  }

  private getReportSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("RESULTADO", "resultado", false),
            new SqlColumnSettings("CULTIVO", "cultivo", false),
            new SqlColumnSettings("PROBLEMA", "problema", false),
            new SqlColumnSettings("CAUSA", "causa", false),
            new SqlColumnSettings("CONFIANZA", "confianza", false),
            new SqlColumnSettings("RESUMEN", "resumen", false),
            new SqlColumnSettings("PORQUESUCEDE", "porQueSucede", false),
            new SqlColumnSettings("RECOMENDACIONES", "recomendaciones", false),
            new SqlColumnSettings("MANEJOSUGERIDO", "manejoSugerido", false),
            new SqlColumnSettings("COMOMEJORARLASALUD", "comoMejorarLaSalud", false),
            new SqlColumnSettings("SEGUIMIENTO", "seguimiento", false),
            new SqlColumnSettings("RAW", "raw", false),
            new SqlColumnSettings("USERID", "userId", false),
        ];
    return new SqlEntitySettings("REPORTS", columns);
  }

  private getChatMessageSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("ROLE", "role", false),
            new SqlColumnSettings("TEXT", "text", false),
            new SqlColumnSettings("TIMESTAMP", "timestamp", false),
            new SqlColumnSettings("USERID", "userId", false),
        ];
    return new SqlEntitySettings("CHATMESSAGES", columns);
  }

}