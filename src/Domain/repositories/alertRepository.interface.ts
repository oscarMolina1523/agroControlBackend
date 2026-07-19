import Alert from '../entities/alert';

export interface IAlertRepository {
  findAll(page: number, pageSize: number): Promise<Alert[]>;
  findById(id: string): Promise<Alert | null>;
  create(data: Alert): Promise<void>;
  update(data: Alert): Promise<void>;
  delete(data: Alert): Promise<void>;
}
