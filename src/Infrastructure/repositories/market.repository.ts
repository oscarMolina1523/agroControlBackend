/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IMarketRepository } from "../../Domain/repositories/marketRepository.interface";
import Market  from "../../Domain/entities/market";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class MarketRepository implements IMarketRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Market[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Market | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Market) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: Market): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: Market): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
