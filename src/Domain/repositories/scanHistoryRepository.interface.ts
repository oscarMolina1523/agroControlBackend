import ScanHistory from '../entities/scanHistory';

export interface IScanHistoryRepository {
  findAll(page: number, pageSize: number): Promise<ScanHistory[]>;
  findById(id: string): Promise<ScanHistory | null>;
  create(data: ScanHistory): Promise<void>;
  update(data: ScanHistory): Promise<void>;
  delete(data: ScanHistory): Promise<void>;
}
