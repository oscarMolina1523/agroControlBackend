/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { ISensorRepository } from "../../Domain/repositories/sensorRepository.interface";
        import Sensor from "../../Domain/entities/sensor";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class SensorRepository implements ISensorRepository {

  /* AUTO-GENERATED-PROPERTIES START */
        private readonly _operationBuilder: ISqlCommandOperationBuilder;
private readonly _connection: ISingletonSqlConnection;
        /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
        constructor(
  @inject("IOperationBuilder") operationBuilder: ISqlCommandOperationBuilder,
  @inject("ISingletonSqlConnection") connection: ISingletonSqlConnection
) {
  this._operationBuilder = operationBuilder;
  this._connection = connection;
}
        /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
        async findAll(page: number = 1, pageSize: number = 100): Promise<Sensor[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.Sensor)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      name: row["NAME"],
type: row["TYPE"],
value: row["VALUE"],
numericValue: row["NUMERICVALUE"],
unit: row["UNIT"],
location: row["LOCATION"],
status: row["STATUS"],
tone: row["TONE"],
arduinoId: row["ARDUINOID"],
    } as Sensor)
);
}

async findById(id: string): Promise<Sensor | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.Sensor)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      name: row["NAME"],
type: row["TYPE"],
value: row["VALUE"],
numericValue: row["NUMERICVALUE"],
unit: row["UNIT"],
location: row["LOCATION"],
status: row["STATUS"],
tone: row["TONE"],
arduinoId: row["ARDUINOID"],
  } as Sensor;
}

async create(entity: Sensor): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Sensor, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: Sensor): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Sensor, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: Sensor): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Sensor, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
