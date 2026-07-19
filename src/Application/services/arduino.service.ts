import { inject, injectable } from "tsyringe";
import { IArduinoService } from "../interfaces/arduino.service.interface";
import { IArduinoRepository } from "../../Domain/repositories/arduinoRepository.interface";
import { ArduinoDto } from "../dtos/arduino.dto";
import Arduino from "../../Domain/entities/arduino";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class ArduinoService implements IArduinoService {
  private readonly _arduinoRepository: IArduinoRepository;

  constructor(@inject("IArduinoRepository") repository: IArduinoRepository) {
    this._arduinoRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Arduino[]> {
    return await this._arduinoRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Arduino | null> {
    return await this._arduinoRepository.findById(id);
  }
  
  async create(data: ArduinoDto): Promise<Arduino> {
    const newData: Arduino = {
      ...data,
      id: generateId(), 
    }
    await this._arduinoRepository.create(newData);
    return newData;
  }

  async update(id: string, data: ArduinoDto): Promise<Arduino | null> {
    const existing = await this._arduinoRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: Arduino = {
      ...data,
      id,
    }
    await this._arduinoRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._arduinoRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._arduinoRepository.delete(existing);
  }
}
