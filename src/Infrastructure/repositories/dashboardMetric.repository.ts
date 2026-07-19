/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IDashboardMetricRepository } from "../../Domain/repositories/dashboardMetricRepository.interface";
import DashboardMetric  from "../../Domain/entities/dashboardMetric";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class DashboardMetricRepository implements IDashboardMetricRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<DashboardMetric[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<DashboardMetric | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: DashboardMetric) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: DashboardMetric): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: DashboardMetric): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
