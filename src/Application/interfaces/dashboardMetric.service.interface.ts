import DashboardMetric from "../../Domain/entities/dashboardMetric";
import { DashboardMetricDto } from './../dtos/dashboardMetric.dto';

export interface IDashboardMetricService {
  findAll(page: number, pageSize: number): Promise<DashboardMetric[]>;
  findById(id: string): Promise<DashboardMetric | null>;
  create(data: DashboardMetricDto): Promise<DashboardMetric>;
  update(id: string, data: DashboardMetricDto): Promise<DashboardMetric | null>;
  delete(id: string): Promise<void>;
}
