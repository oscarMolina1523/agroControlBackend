import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IMarketService } from './../../Application/interfaces/market.service.interface';

@injectable()
export class MarketController {

  private readonly _marketService: IMarketService;

  constructor(@inject("IMarketService") service: IMarketService) {
    this._marketService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._marketService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._marketService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._marketService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._marketService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._marketService.delete(id);
    res.status(204).send();
  }
}
