/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IReportRepository } from "../../Domain/repositories/reportRepository.interface";
import Report  from "../../Domain/entities/report";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class ReportRepository implements IReportRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Report[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Report | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Report) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: Report): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: Report): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
