import Catalog from '../entities/catalog';

export interface ICatalogRepository {
  findAll(page: number, pageSize: number): Promise<Catalog[]>;
  findById(id: string): Promise<Catalog | null>;
  create(data: Catalog): Promise<void>;
  update(data: Catalog): Promise<void>;
  delete(data: Catalog): Promise<void>;
}
