import BaseModel from "./base.model";

export default class Parcel extends BaseModel {
  name: string;
  area: string;
  status: string;
  statusTone: string;
  humidity: string;
  fertility: string;
  temperature: string;
  bounds: string[];
  center: string[];
  soilHistory: string[];
  historicalData: string[];
  cropId: string;
  sowingDate: Date;
  expectedProduction: string;

  constructor({
    id,
    name,
    area,
    status,
    statusTone,
    humidity,
    fertility,
    temperature,
    bounds,
    center,
    soilHistory,
    historicalData,
    cropId,
    sowingDate,
    expectedProduction,
  }: {
    id: string;
    name: string;
    area: string;
    status: string;
    statusTone: string;
    humidity: string;
    fertility: string;
    temperature: string;
    bounds: string[];
    center: string[];
    soilHistory: string[];
    historicalData: string[];
    cropId: string;
    sowingDate: Date;
    expectedProduction: string;
  }) {
    super(id);
    this.name = name;
    this.area = area;
    this.status = status;
    this.statusTone = statusTone;
    this.humidity = humidity;
    this.fertility = fertility;
    this.temperature = temperature;
    this.bounds = bounds;
    this.center = center;
    this.soilHistory = soilHistory;
    this.historicalData = historicalData;
    this.cropId = cropId;
    this.sowingDate = sowingDate;
    this.expectedProduction = expectedProduction;
  }
}
