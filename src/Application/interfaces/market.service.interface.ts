import Market from "../../Domain/entities/market";
import { MarketDto } from './../dtos/market.dto';

export interface IMarketService {
  findAll(page: number, pageSize: number): Promise<Market[]>;
  findById(id: string): Promise<Market | null>;
  create(data: MarketDto): Promise<Market>;
  update(id: string, data: MarketDto): Promise<Market | null>;
  delete(id: string): Promise<void>;
}
