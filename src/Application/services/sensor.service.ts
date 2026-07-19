import { inject, injectable } from "tsyringe";
import { ISensorService } from "../interfaces/sensor.service.interface";
import { ISensorRepository } from "../../Domain/repositories/sensorRepository.interface";
import { SensorDto } from "../dtos/sensor.dto";
import Sensor from "../../Domain/entities/sensor";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class SensorService implements ISensorService {
  private readonly _sensorRepository: ISensorRepository;

  constructor(@inject("ISensorRepository") repository: ISensorRepository) {
    this._sensorRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Sensor[]> {
    return await this._sensorRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Sensor | null> {
    return await this._sensorRepository.findById(id);
  }
  
  async create(data: SensorDto): Promise<Sensor> {
    const newData: Sensor = {
      ...data,
      id: generateId(), 
    }
    await this._sensorRepository.create(newData);
    return newData;
  }

  async update(id: string, data: SensorDto): Promise<Sensor | null> {
    const existing = await this._sensorRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: Sensor = {
      ...data,
      id,
    }
    await this._sensorRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._sensorRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._sensorRepository.delete(existing);
  }
}
