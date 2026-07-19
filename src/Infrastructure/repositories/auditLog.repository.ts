/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { IAuditLogRepository } from "../../Domain/repositories/auditLogRepository.interface";
        import AuditLog from "../../Domain/entities/auditLog";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class AuditLogRepository implements IAuditLogRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<AuditLog[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.AuditLog)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      entity: row["ENTITY"],
entityId: row["ENTITYID"],
action: row["ACTION"],
changes: row["CHANGES"],
performedBy: row["PERFORMEDBY"],
performedAt: row["PERFORMEDAT"],
    } as AuditLog)
);
}

async findById(id: string): Promise<AuditLog | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.AuditLog)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      entity: row["ENTITY"],
entityId: row["ENTITYID"],
action: row["ACTION"],
changes: row["CHANGES"],
performedBy: row["PERFORMEDBY"],
performedAt: row["PERFORMEDAT"],
  } as AuditLog;
}

async create(entity: AuditLog): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.AuditLog, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: AuditLog): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.AuditLog, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: AuditLog): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.AuditLog, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
