/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { IScanHistoryRepository } from "../../Domain/repositories/scanHistoryRepository.interface";
        import ScanHistory from "../../Domain/entities/scanHistory";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class ScanHistoryRepository implements IScanHistoryRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<ScanHistory[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.ScanHistory)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      fileName: row["FILENAME"],
resultText: row["RESULTTEXT"],
createdAt: row["CREATEDAT"],
imageUrl: row["IMAGEURL"],
userId: row["USERID"],
    } as ScanHistory)
);
}

async findById(id: string): Promise<ScanHistory | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.ScanHistory)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      fileName: row["FILENAME"],
resultText: row["RESULTTEXT"],
createdAt: row["CREATEDAT"],
imageUrl: row["IMAGEURL"],
userId: row["USERID"],
  } as ScanHistory;
}

async create(entity: ScanHistory): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.ScanHistory, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: ScanHistory): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.ScanHistory, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: ScanHistory): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.ScanHistory, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
