export interface ParcelDto {
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
}
