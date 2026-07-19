import Arduino from "../../Domain/entities/arduino";
import { ArduinoDto } from './../dtos/arduino.dto';

export interface IArduinoService {
  findAll(page: number, pageSize: number): Promise<Arduino[]>;
  findById(id: string): Promise<Arduino | null>;
  create(data: ArduinoDto): Promise<Arduino>;
  update(id: string, data: ArduinoDto): Promise<Arduino | null>;
  delete(id: string): Promise<void>;
}
