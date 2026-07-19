import Market from '../entities/market';

export interface IMarketRepository {
  findAll(page: number, pageSize: number): Promise<Market[]>;
  findById(id: string): Promise<Market | null>;
  create(data: Market): Promise<void>;
  update(data: Market): Promise<void>;
  delete(data: Market): Promise<void>;
}
