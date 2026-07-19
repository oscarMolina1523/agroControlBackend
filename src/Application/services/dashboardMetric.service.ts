import { inject, injectable } from "tsyringe";
import { IDashboardMetricService } from "../interfaces/dashboardMetric.service.interface";
import { IDashboardMetricRepository } from "../../Domain/repositories/dashboardMetricRepository.interface";
import { DashboardMetricDto } from "../dtos/dashboardMetric.dto";
import DashboardMetric from "../../Domain/entities/dashboardMetric";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class DashboardMetricService implements IDashboardMetricService {
  private readonly _dashboardMetricRepository: IDashboardMetricRepository;

  constructor(@inject("IDashboardMetricRepository") repository: IDashboardMetricRepository) {
    this._dashboardMetricRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<DashboardMetric[]> {
    return await this._dashboardMetricRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<DashboardMetric | null> {
    return await this._dashboardMetricRepository.findById(id);
  }
  
  async create(data: DashboardMetricDto): Promise<DashboardMetric> {
    const newData: DashboardMetric = {
      ...data,
      id: generateId(), 
    }
    await this._dashboardMetricRepository.create(newData);
    return newData;
  }

  async update(id: string, data: DashboardMetricDto): Promise<DashboardMetric | null> {
    const existing = await this._dashboardMetricRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: DashboardMetric = {
      ...data,
      id,
    }
    await this._dashboardMetricRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._dashboardMetricRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._dashboardMetricRepository.delete(existing);
  }
}
