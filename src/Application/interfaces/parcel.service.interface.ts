import Parcel from "../../Domain/entities/parcel";
import { ParcelDto } from './../dtos/parcel.dto';

export interface IParcelService {
  findAll(page: number, pageSize: number): Promise<Parcel[]>;
  findById(id: string): Promise<Parcel | null>;
  create(data: ParcelDto): Promise<Parcel>;
  update(id: string, data: ParcelDto): Promise<Parcel | null>;
  delete(id: string): Promise<void>;
}
