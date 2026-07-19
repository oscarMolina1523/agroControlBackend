/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { IDashboardMetricRepository } from "../../Domain/repositories/dashboardMetricRepository.interface";
        import DashboardMetric from "../../Domain/entities/dashboardMetric";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class DashboardMetricRepository implements IDashboardMetricRepository {

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
        async findAll(page: number = 1, pageSize: number = 100): Promise<DashboardMetric[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.DashboardMetric)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      label: row["LABEL"],
value: row["VALUE"],
percentage: row["PERCENTAGE"],
description: row["DESCRIPTION"],
color: row["COLOR"],
chartData: row["CHARTDATA"],
icon: row["ICON"],
    } as DashboardMetric)
);
}

async findById(id: string): Promise<DashboardMetric | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.DashboardMetric)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      label: row["LABEL"],
value: row["VALUE"],
percentage: row["PERCENTAGE"],
description: row["DESCRIPTION"],
color: row["COLOR"],
chartData: row["CHARTDATA"],
icon: row["ICON"],
  } as DashboardMetric;
}

async create(entity: DashboardMetric): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.DashboardMetric, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: DashboardMetric): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.DashboardMetric, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: DashboardMetric): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.DashboardMetric, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
