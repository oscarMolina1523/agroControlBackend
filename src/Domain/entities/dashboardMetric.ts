import BaseModel from "./base.model";

export default class DashboardMetric extends BaseModel {
  label: string;
  value: string;
  percentage: number;
  description: string;
  color: string;
  chartData: number[];
  icon: string;

  constructor({
    id,
    label,
    value,
    percentage,
    description,
    color,
    chartData,
    icon,
  }: {
    id: string;
    label: string;
    value: string;
    percentage: number;
    description: string;
    color: string;
    chartData: number[];
    icon: string;
  }) {
    super(id);
    this.label = label;
    this.value = value;
    this.percentage = percentage;
    this.description = description;
    this.color = color;
    this.chartData = chartData;
    this.icon = icon;
  }
}
