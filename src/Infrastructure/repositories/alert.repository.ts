/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IAlertRepository } from "../../Domain/repositories/alertRepository.interface";
import Alert  from "../../Domain/entities/alert";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class AlertRepository implements IAlertRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Alert[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Alert | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Alert) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: Alert): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: Alert): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
