/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IParcelRepository } from "../../Domain/repositories/parcelRepository.interface";
import Parcel  from "../../Domain/entities/parcel";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class ParcelRepository implements IParcelRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Parcel[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Parcel | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Parcel) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: Parcel): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: Parcel): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
