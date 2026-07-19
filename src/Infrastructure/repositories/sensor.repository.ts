/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { ISensorRepository } from "../../Domain/repositories/sensorRepository.interface";
import Sensor  from "../../Domain/entities/sensor";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class SensorRepository implements ISensorRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Sensor[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Sensor | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Sensor) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: Sensor): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: Sensor): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
