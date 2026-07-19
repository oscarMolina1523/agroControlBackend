/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { ICatalogRepository } from "../../Domain/repositories/catalogRepository.interface";
        import Catalog from "../../Domain/entities/catalog";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class CatalogRepository implements ICatalogRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<Catalog[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.Catalog)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      title: row["TITLE"],
author: row["AUTHOR"],
modelPath: row["MODELPATH"],
nutritionalInfo: row["NUTRITIONALINFO"],
growthPeriod: row["GROWTHPERIOD"],
waterRequirements: row["WATERREQUIREMENTS"],
recommendedFertilizers: row["RECOMMENDEDFERTILIZERS"],
commonDiseases: row["COMMONDISEASES"],
parcels: row["PARCELS"],
estimatedProduction: row["ESTIMATEDPRODUCTION"],
currentPrice: row["CURRENTPRICE"],
modelType: row["MODELTYPE"],
    } as Catalog)
);
}

async findById(id: string): Promise<Catalog | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.Catalog)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      title: row["TITLE"],
author: row["AUTHOR"],
modelPath: row["MODELPATH"],
nutritionalInfo: row["NUTRITIONALINFO"],
growthPeriod: row["GROWTHPERIOD"],
waterRequirements: row["WATERREQUIREMENTS"],
recommendedFertilizers: row["RECOMMENDEDFERTILIZERS"],
commonDiseases: row["COMMONDISEASES"],
parcels: row["PARCELS"],
estimatedProduction: row["ESTIMATEDPRODUCTION"],
currentPrice: row["CURRENTPRICE"],
modelType: row["MODELTYPE"],
  } as Catalog;
}

async create(entity: Catalog): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Catalog, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: Catalog): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Catalog, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: Catalog): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Catalog, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
