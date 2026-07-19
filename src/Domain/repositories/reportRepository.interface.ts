import Report from '../entities/report';

export interface IReportRepository {
  findAll(page: number, pageSize: number): Promise<Report[]>;
  findById(id: string): Promise<Report | null>;
  create(data: Report): Promise<void>;
  update(data: Report): Promise<void>;
  delete(data: Report): Promise<void>;
}
