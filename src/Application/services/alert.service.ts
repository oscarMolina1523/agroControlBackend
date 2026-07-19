import { inject, injectable } from "tsyringe";
import { IAlertService } from "../interfaces/alert.service.interface";
import { IAlertRepository } from "../../Domain/repositories/alertRepository.interface";
import { AlertDto } from "../dtos/alert.dto";
import Alert from "../../Domain/entities/alert";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class AlertService implements IAlertService {
  private readonly _alertRepository: IAlertRepository;

  constructor(@inject("IAlertRepository") repository: IAlertRepository) {
    this._alertRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Alert[]> {
    return await this._alertRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Alert | null> {
    return await this._alertRepository.findById(id);
  }
  
  async create(data: AlertDto): Promise<Alert> {
    const newData: Alert = {
      ...data,
      id: generateId(), 
    }
    await this._alertRepository.create(newData);
    return newData;
  }

  async update(id: string, data: AlertDto): Promise<Alert | null> {
    const existing = await this._alertRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: Alert = {
      ...data,
      id,
    }
    await this._alertRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._alertRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._alertRepository.delete(existing);
  }
}
