import Parcel from '../entities/parcel';

export interface IParcelRepository {
  findAll(page: number, pageSize: number): Promise<Parcel[]>;
  findById(id: string): Promise<Parcel | null>;
  create(data: Parcel): Promise<void>;
  update(data: Parcel): Promise<void>;
  delete(data: Parcel): Promise<void>;
}
