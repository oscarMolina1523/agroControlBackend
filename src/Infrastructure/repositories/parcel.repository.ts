/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { IParcelRepository } from "../../Domain/repositories/parcelRepository.interface";
        import Parcel from "../../Domain/entities/parcel";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class ParcelRepository implements IParcelRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<Parcel[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.Parcel)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      name: row["NAME"],
area: row["AREA"],
status: row["STATUS"],
statusTone: row["STATUSTONE"],
humidity: row["HUMIDITY"],
fertility: row["FERTILITY"],
temperature: row["TEMPERATURE"],
bounds: row["BOUNDS"],
center: row["CENTER"],
soilHistory: row["SOILHISTORY"],
historicalData: row["HISTORICALDATA"],
cropId: row["CROPID"],
sowingDate: row["SOWINGDATE"],
expectedProduction: row["EXPECTEDPRODUCTION"],
    } as Parcel)
);
}

async findById(id: string): Promise<Parcel | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.Parcel)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      name: row["NAME"],
area: row["AREA"],
status: row["STATUS"],
statusTone: row["STATUSTONE"],
humidity: row["HUMIDITY"],
fertility: row["FERTILITY"],
temperature: row["TEMPERATURE"],
bounds: row["BOUNDS"],
center: row["CENTER"],
soilHistory: row["SOILHISTORY"],
historicalData: row["HISTORICALDATA"],
cropId: row["CROPID"],
sowingDate: row["SOWINGDATE"],
expectedProduction: row["EXPECTEDPRODUCTION"],
  } as Parcel;
}

async create(entity: Parcel): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Parcel, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: Parcel): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Parcel, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: Parcel): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Parcel, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
