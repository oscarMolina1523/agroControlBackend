/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { IAlertRepository } from "../../Domain/repositories/alertRepository.interface";
        import Alert from "../../Domain/entities/alert";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class AlertRepository implements IAlertRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<Alert[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.Alert)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      emoji: row["EMOJI"],
title: row["TITLE"],
description: row["DESCRIPTION"],
time: row["TIME"],
severity: row["SEVERITY"],
resolved: row["RESOLVED"],
source: row["SOURCE"],
targetPage: row["TARGETPAGE"],
targetId: row["TARGETID"],
    } as Alert)
);
}

async findById(id: string): Promise<Alert | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.Alert)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      emoji: row["EMOJI"],
title: row["TITLE"],
description: row["DESCRIPTION"],
time: row["TIME"],
severity: row["SEVERITY"],
resolved: row["RESOLVED"],
source: row["SOURCE"],
targetPage: row["TARGETPAGE"],
targetId: row["TARGETID"],
  } as Alert;
}

async create(entity: Alert): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Alert, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: Alert): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Alert, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: Alert): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Alert, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
