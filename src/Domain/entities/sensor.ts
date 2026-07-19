import BaseModel from "./base.model";

export default class Sensor extends BaseModel {
  name: string;
  type: string;
  value: string;
  numericValue: number;
  unit: string;
  location: string;
  status: string;
  tone: string;
  arduinoId: string;

  constructor({
    id,
    name,
    type,
    value,
    numericValue,
    unit,
    location,
    status,
    tone,
    arduinoId,
  }: {
    id: string;
    name: string;
    type: string;
    value: string;
    numericValue: number;
    unit: string;
    location: string;
    status: string;
    tone: string;
    arduinoId: string;
  }) {
    super(id);
    this.name = name;
    this.type = type;
    this.value = value;
    this.numericValue = numericValue;
    this.unit = unit;
    this.location = location;
    this.status = status;
    this.tone = tone;
    this.arduinoId = arduinoId;
  }
}
