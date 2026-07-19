import Report from "../../Domain/entities/report";
import { ReportDto } from './../dtos/report.dto';

export interface IReportService {
  findAll(page: number, pageSize: number): Promise<Report[]>;
  findById(id: string): Promise<Report | null>;
  create(data: ReportDto): Promise<Report>;
  update(id: string, data: ReportDto): Promise<Report | null>;
  delete(id: string): Promise<void>;
}
