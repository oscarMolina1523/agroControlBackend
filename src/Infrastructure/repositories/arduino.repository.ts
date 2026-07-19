/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IArduinoRepository } from "../../Domain/repositories/arduinoRepository.interface";
import Arduino  from "../../Domain/entities/arduino";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class ArduinoRepository implements IArduinoRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Arduino[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Arduino | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Arduino) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: Arduino): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: Arduino): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
