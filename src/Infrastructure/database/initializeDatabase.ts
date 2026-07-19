import { createClient } from "@libsql/client";

const dbUrl = process.env.TURSO_DB_URL || "not-found";
const token = process.env.TURSO_DB_AUTH_TOKEN || "not-found";

export async function initializeDatabase(): Promise<void> {
  const db = createClient({ url: dbUrl, authToken: token });

  try {
    

  await db.execute(`
    CREATE TABLE IF NOT EXISTS USERS (
        ID TEXT PRIMARY KEY,
        NAME TEXT,
        EMAIL TEXT,
        ORG TEXT,
        PASSWORD TEXT,
        ROLE TEXT,
        PICTURE TEXT
    );
`);

console.log("✔ User ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS CATALOGS (
        ID TEXT PRIMARY KEY,
        TITLE TEXT,
        AUTHOR TEXT,
        MODELPATH TEXT,
        NUTRITIONALINFO TEXT,
        GROWTHPERIOD TEXT,
        WATERREQUIREMENTS TEXT,
        RECOMMENDEDFERTILIZERS TEXT,
        COMMONDISEASES TEXT,
        PARCELS TEXT,
        ESTIMATEDPRODUCTION TEXT,
        CURRENTPRICE INTEGER,
        MODELTYPE TEXT
    );
`);

console.log("✔ Catalog ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS ALERTS (
        ID TEXT PRIMARY KEY,
        EMOJI TEXT,
        TITLE TEXT,
        DESCRIPTION TEXT,
        TIME TEXT,
        SEVERITY TEXT,
        RESOLVED INTEGER,
        SOURCE TEXT,
        TARGETPAGE TEXT,
        TARGETID TEXT
    );
`);

console.log("✔ Alert ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS ARDUINOS (
        ID TEXT PRIMARY KEY,
        NAME TEXT,
        LOCATION TEXT,
        STATUS TEXT,
        BAUDRATE INTEGER,
        FREQUENCY INTEGER,
        DESCRIPTION TEXT
    );
`);

console.log("✔ Arduino ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS DASHBOARDMETRICS (
        ID TEXT PRIMARY KEY,
        LABEL TEXT,
        VALUE TEXT,
        PERCENTAGE INTEGER,
        DESCRIPTION TEXT,
        COLOR TEXT,
        CHARTDATA TEXT,
        ICON TEXT
    );
`);

console.log("✔ DashboardMetric ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS MARKETS (
        ID TEXT PRIMARY KEY,
        NAME TEXT,
        DESCRIPTION TEXT,
        PRICE INTEGER,
        STATUS TEXT,
        CATEGORY TEXT,
        IMAGEURL TEXT,
        ENTITYID TEXT,
        STARTINGPRICE INTEGER,
        CURRENTBID INTEGER,
        HIGHESTBIDDERID TEXT,
        BIDCOUNT INTEGER,
        CREATEDAT TEXT,
        ENDDATE TEXT,
        LOTSIZE INTEGER,
        UNIT TEXT
    );
`);

console.log("✔ Market ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS PARCELS (
        ID TEXT PRIMARY KEY,
        NAME TEXT,
        AREA TEXT,
        STATUS TEXT,
        STATUSTONE TEXT,
        HUMIDITY TEXT,
        FERTILITY TEXT,
        TEMPERATURE TEXT,
        BOUNDS TEXT,
        CENTER TEXT,
        SOILHISTORY TEXT,
        HISTORICALDATA TEXT,
        CROPID TEXT,
        SOWINGDATE TEXT,
        EXPECTEDPRODUCTION TEXT
    );
`);

console.log("✔ Parcel ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS SENSORS (
        ID TEXT PRIMARY KEY,
        NAME TEXT,
        TYPE TEXT,
        VALUE TEXT,
        NUMERICVALUE INTEGER,
        UNIT TEXT,
        LOCATION TEXT,
        STATUS TEXT,
        TONE TEXT,
        ARDUINOID TEXT
    );
`);

console.log("✔ Sensor ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS SCANHISTORIES (
        ID TEXT PRIMARY KEY,
        FILENAME TEXT,
        RESULTTEXT TEXT,
        CREATEDAT TEXT,
        IMAGEURL TEXT,
        USERID TEXT
    );
`);

console.log("✔ ScanHistory ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS REPORTS (
        ID TEXT PRIMARY KEY,
        RESULTADO TEXT,
        CULTIVO TEXT,
        PROBLEMA TEXT,
        CAUSA TEXT,
        CONFIANZA TEXT,
        RESUMEN TEXT,
        PORQUESUCEDE TEXT,
        RECOMENDACIONES TEXT,
        MANEJOSUGERIDO TEXT,
        COMOMEJORARLASALUD TEXT,
        SEGUIMIENTO TEXT,
        RAW TEXT,
        USERID TEXT
    );
`);

console.log("✔ Report ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS CHATMESSAGES (
        ID TEXT PRIMARY KEY,
        ROLE TEXT,
        TEXT TEXT,
        TIMESTAMP INTEGER,
        USERID TEXT
    );
`);

console.log("✔ ChatMessage ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS AUDITLOGS (
        ID TEXT PRIMARY KEY,
        ENTITY TEXT,
        ENTITYID TEXT,
        ACTION TEXT,
        CHANGES TEXT,
        PERFORMEDBY TEXT,
        PERFORMEDAT TEXT
    );
`);

console.log("✔ AuditLog ready");


  } catch (error) {
    console.error("Database init error:", error);
  } finally {
    await db.close();
  }
}