import { inject, injectable } from "tsyringe";
import { IScanHistoryService } from "../interfaces/scanHistory.service.interface";
import { IScanHistoryRepository } from "../../Domain/repositories/scanHistoryRepository.interface";
import { ScanHistoryDto } from "../dtos/scanHistory.dto";
import ScanHistory from "../../Domain/entities/scanHistory";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class ScanHistoryService implements IScanHistoryService {
  private readonly _scanHistoryRepository: IScanHistoryRepository;

  constructor(@inject("IScanHistoryRepository") repository: IScanHistoryRepository) {
    this._scanHistoryRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<ScanHistory[]> {
    return await this._scanHistoryRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<ScanHistory | null> {
    return await this._scanHistoryRepository.findById(id);
  }
  
  async create(data: ScanHistoryDto): Promise<ScanHistory> {
    const newData: ScanHistory = {
      ...data,
      id: generateId(), 
    }
    await this._scanHistoryRepository.create(newData);
    return newData;
  }

  async update(id: string, data: ScanHistoryDto): Promise<ScanHistory | null> {
    const existing = await this._scanHistoryRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: ScanHistory = {
      ...data,
      id,
    }
    await this._scanHistoryRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._scanHistoryRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._scanHistoryRepository.delete(existing);
  }
}
