import Arduino from '../entities/arduino';

export interface IArduinoRepository {
  findAll(page: number, pageSize: number): Promise<Arduino[]>;
  findById(id: string): Promise<Arduino | null>;
  create(data: Arduino): Promise<void>;
  update(data: Arduino): Promise<void>;
  delete(data: Arduino): Promise<void>;
}
