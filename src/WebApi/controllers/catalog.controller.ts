import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ICatalogService } from './../../Application/interfaces/catalog.service.interface';

@injectable()
export class CatalogController {

  private readonly _catalogService: ICatalogService;

  constructor(@inject("ICatalogService") service: ICatalogService) {
    this._catalogService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._catalogService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._catalogService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._catalogService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._catalogService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._catalogService.delete(id);
    res.status(204).send();
  }
}
