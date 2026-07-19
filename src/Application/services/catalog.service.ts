import { inject, injectable } from "tsyringe";
import { ICatalogService } from "../interfaces/catalog.service.interface";
import { ICatalogRepository } from "../../Domain/repositories/catalogRepository.interface";
import { CatalogDto } from "../dtos/catalog.dto";
import Catalog from "../../Domain/entities/catalog";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class CatalogService implements ICatalogService {
  private readonly _catalogRepository: ICatalogRepository;

  constructor(@inject("ICatalogRepository") repository: ICatalogRepository) {
    this._catalogRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Catalog[]> {
    return await this._catalogRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Catalog | null> {
    return await this._catalogRepository.findById(id);
  }
  
  async create(data: CatalogDto): Promise<Catalog> {
    const newData: Catalog = {
      ...data,
      id: generateId(), 
    }
    await this._catalogRepository.create(newData);
    return newData;
  }

  async update(id: string, data: CatalogDto): Promise<Catalog | null> {
    const existing = await this._catalogRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: Catalog = {
      ...data,
      id,
    }
    await this._catalogRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._catalogRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._catalogRepository.delete(existing);
  }
}
