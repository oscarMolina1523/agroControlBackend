import BaseModel from "./base.model";

export default class Arduino extends BaseModel {
  name: string;
  location: string;
  status: string;
  baudRate: number;
  frequency: number;
  description: string;

  constructor({
    id,
    name,
    location,
    status,
    baudRate,
    frequency,
    description,
  }: {
    id: string;
    name: string;
    location: string;
    status: string;
    baudRate: number;
    frequency: number;
    description: string;
  }) {
    super(id);
    this.name = name;
    this.location = location;
    this.status = status;
    this.baudRate = baudRate;
    this.frequency = frequency;
    this.description = description;
  }
}
