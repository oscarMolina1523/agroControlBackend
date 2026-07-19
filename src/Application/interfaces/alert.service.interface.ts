import Alert from "../../Domain/entities/alert";
import { AlertDto } from './../dtos/alert.dto';

export interface IAlertService {
  findAll(page: number, pageSize: number): Promise<Alert[]>;
  findById(id: string): Promise<Alert | null>;
  create(data: AlertDto): Promise<Alert>;
  update(id: string, data: AlertDto): Promise<Alert | null>;
  delete(id: string): Promise<void>;
}
