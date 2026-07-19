import Sensor from "../../Domain/entities/sensor";
import { SensorDto } from './../dtos/sensor.dto';

export interface ISensorService {
  findAll(page: number, pageSize: number): Promise<Sensor[]>;
  findById(id: string): Promise<Sensor | null>;
  create(data: SensorDto): Promise<Sensor>;
  update(id: string, data: SensorDto): Promise<Sensor | null>;
  delete(id: string): Promise<void>;
}
