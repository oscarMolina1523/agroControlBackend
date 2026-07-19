/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { IReportRepository } from "../../Domain/repositories/reportRepository.interface";
        import Report from "../../Domain/entities/report";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class ReportRepository implements IReportRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<Report[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.Report)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      resultado: row["RESULTADO"],
cultivo: row["CULTIVO"],
problema: row["PROBLEMA"],
causa: row["CAUSA"],
confianza: row["CONFIANZA"],
resumen: row["RESUMEN"],
porQueSucede: row["PORQUESUCEDE"],
recomendaciones: row["RECOMENDACIONES"],
manejoSugerido: row["MANEJOSUGERIDO"],
comoMejorarLaSalud: row["COMOMEJORARLASALUD"],
seguimiento: row["SEGUIMIENTO"],
raw: row["RAW"],
userId: row["USERID"],
    } as Report)
);
}

async findById(id: string): Promise<Report | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.Report)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      resultado: row["RESULTADO"],
cultivo: row["CULTIVO"],
problema: row["PROBLEMA"],
causa: row["CAUSA"],
confianza: row["CONFIANZA"],
resumen: row["RESUMEN"],
porQueSucede: row["PORQUESUCEDE"],
recomendaciones: row["RECOMENDACIONES"],
manejoSugerido: row["MANEJOSUGERIDO"],
comoMejorarLaSalud: row["COMOMEJORARLASALUD"],
seguimiento: row["SEGUIMIENTO"],
raw: row["RAW"],
userId: row["USERID"],
  } as Report;
}

async create(entity: Report): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Report, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: Report): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Report, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: Report): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Report, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
