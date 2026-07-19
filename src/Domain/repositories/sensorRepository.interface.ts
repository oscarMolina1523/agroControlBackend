import Sensor from '../entities/sensor';

export interface ISensorRepository {
  findAll(page: number, pageSize: number): Promise<Sensor[]>;
  findById(id: string): Promise<Sensor | null>;
  create(data: Sensor): Promise<void>;
  update(data: Sensor): Promise<void>;
  delete(data: Sensor): Promise<void>;
}
