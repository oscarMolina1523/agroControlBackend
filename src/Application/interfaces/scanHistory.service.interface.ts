import ScanHistory from "../../Domain/entities/scanHistory";
import { ScanHistoryDto } from './../dtos/scanHistory.dto';

export interface IScanHistoryService {
  findAll(page: number, pageSize: number): Promise<ScanHistory[]>;
  findById(id: string): Promise<ScanHistory | null>;
  create(data: ScanHistoryDto): Promise<ScanHistory>;
  update(id: string, data: ScanHistoryDto): Promise<ScanHistory | null>;
  delete(id: string): Promise<void>;
}
