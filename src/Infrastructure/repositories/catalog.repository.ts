/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { ICatalogRepository } from "../../Domain/repositories/catalogRepository.interface";
import Catalog  from "../../Domain/entities/catalog";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class CatalogRepository implements ICatalogRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Catalog[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Catalog | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Catalog) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: Catalog): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: Catalog): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
