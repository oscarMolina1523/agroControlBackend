import { inject, injectable } from "tsyringe";
import { IParcelService } from "../interfaces/parcel.service.interface";
import { IParcelRepository } from "../../Domain/repositories/parcelRepository.interface";
import { ParcelDto } from "../dtos/parcel.dto";
import Parcel from "../../Domain/entities/parcel";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class ParcelService implements IParcelService {
  private readonly _parcelRepository: IParcelRepository;

  constructor(@inject("IParcelRepository") repository: IParcelRepository) {
    this._parcelRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Parcel[]> {
    return await this._parcelRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Parcel | null> {
    return await this._parcelRepository.findById(id);
  }
  
  async create(data: ParcelDto): Promise<Parcel> {
    const newData: Parcel = {
      ...data,
      id: generateId(), 
    }
    await this._parcelRepository.create(newData);
    return newData;
  }

  async update(id: string, data: ParcelDto): Promise<Parcel | null> {
    const existing = await this._parcelRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: Parcel = {
      ...data,
      id,
    }
    await this._parcelRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._parcelRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._parcelRepository.delete(existing);
  }
}
