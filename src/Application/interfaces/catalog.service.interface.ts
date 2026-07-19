import Catalog from "../../Domain/entities/catalog";
import { CatalogDto } from './../dtos/catalog.dto';

export interface ICatalogService {
  findAll(page: number, pageSize: number): Promise<Catalog[]>;
  findById(id: string): Promise<Catalog | null>;
  create(data: CatalogDto): Promise<Catalog>;
  update(id: string, data: CatalogDto): Promise<Catalog | null>;
  delete(id: string): Promise<void>;
}
