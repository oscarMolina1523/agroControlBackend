import { inject, injectable } from "tsyringe";
import { IMarketService } from "../interfaces/market.service.interface";
import { IMarketRepository } from "../../Domain/repositories/marketRepository.interface";
import { MarketDto } from "../dtos/market.dto";
import Market from "../../Domain/entities/market";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class MarketService implements IMarketService {
  private readonly _marketRepository: IMarketRepository;

  constructor(@inject("IMarketRepository") repository: IMarketRepository) {
    this._marketRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Market[]> {
    return await this._marketRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Market | null> {
    return await this._marketRepository.findById(id);
  }
  
  async create(data: MarketDto): Promise<Market> {
    const newData: Market = {
      ...data,
      id: generateId(), 
    }
    await this._marketRepository.create(newData);
    return newData;
  }

  async update(id: string, data: MarketDto): Promise<Market | null> {
    const existing = await this._marketRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: Market = {
      ...data,
      id,
    }
    await this._marketRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._marketRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._marketRepository.delete(existing);
  }
}
