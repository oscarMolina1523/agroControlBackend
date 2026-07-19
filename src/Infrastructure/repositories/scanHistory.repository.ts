/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IScanHistoryRepository } from "../../Domain/repositories/scanHistoryRepository.interface";
import ScanHistory  from "../../Domain/entities/scanHistory";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class ScanHistoryRepository implements IScanHistoryRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<ScanHistory[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<ScanHistory | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: ScanHistory) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: ScanHistory): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: ScanHistory): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
