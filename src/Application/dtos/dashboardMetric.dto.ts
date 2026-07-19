export interface DashboardMetricDto {
  label: string;
  value: string;
  percentage: number;
  description: string;
  color: string;
  chartData: number[];
  icon: string;
}
