import { inject, injectable } from "tsyringe";
import { IReportService } from "../interfaces/report.service.interface";
import { IReportRepository } from "../../Domain/repositories/reportRepository.interface";
import { ReportDto } from "../dtos/report.dto";
import Report from "../../Domain/entities/report";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class ReportService implements IReportService {
  private readonly _reportRepository: IReportRepository;

  constructor(@inject("IReportRepository") repository: IReportRepository) {
    this._reportRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Report[]> {
    return await this._reportRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Report | null> {
    return await this._reportRepository.findById(id);
  }
  
  async create(data: ReportDto): Promise<Report> {
    const newData: Report = {
      ...data,
      id: generateId(), 
    }
    await this._reportRepository.create(newData);
    return newData;
  }

  async update(id: string, data: ReportDto): Promise<Report | null> {
    const existing = await this._reportRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: Report = {
      ...data,
      id,
    }
    await this._reportRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._reportRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._reportRepository.delete(existing);
  }
}
