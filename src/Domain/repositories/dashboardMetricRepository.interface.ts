import DashboardMetric from '../entities/dashboardMetric';

export interface IDashboardMetricRepository {
  findAll(page: number, pageSize: number): Promise<DashboardMetric[]>;
  findById(id: string): Promise<DashboardMetric | null>;
  create(data: DashboardMetric): Promise<void>;
  update(data: DashboardMetric): Promise<void>;
  delete(data: DashboardMetric): Promise<void>;
}
