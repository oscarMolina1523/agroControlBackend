/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { IMarketRepository } from "../../Domain/repositories/marketRepository.interface";
        import Market from "../../Domain/entities/market";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class MarketRepository implements IMarketRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<Market[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.Market)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      name: row["NAME"],
description: row["DESCRIPTION"],
price: row["PRICE"],
status: row["STATUS"],
category: row["CATEGORY"],
imageUrl: row["IMAGEURL"],
entityId: row["ENTITYID"],
startingPrice: row["STARTINGPRICE"],
currentBid: row["CURRENTBID"],
highestBidderId: row["HIGHESTBIDDERID"],
bidCount: row["BIDCOUNT"],
createdAt: row["CREATEDAT"],
endDate: row["ENDDATE"],
lotSize: row["LOTSIZE"],
unit: row["UNIT"],
    } as Market)
);
}

async findById(id: string): Promise<Market | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.Market)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      name: row["NAME"],
description: row["DESCRIPTION"],
price: row["PRICE"],
status: row["STATUS"],
category: row["CATEGORY"],
imageUrl: row["IMAGEURL"],
entityId: row["ENTITYID"],
startingPrice: row["STARTINGPRICE"],
currentBid: row["CURRENTBID"],
highestBidderId: row["HIGHESTBIDDERID"],
bidCount: row["BIDCOUNT"],
createdAt: row["CREATEDAT"],
endDate: row["ENDDATE"],
lotSize: row["LOTSIZE"],
unit: row["UNIT"],
  } as Market;
}

async create(entity: Market): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Market, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: Market): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Market, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: Market): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Market, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
