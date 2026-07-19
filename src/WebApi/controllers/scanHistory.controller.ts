import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IScanHistoryService } from './../../Application/interfaces/scanHistory.service.interface';

@injectable()
export class ScanHistoryController {

  private readonly _scanHistoryService: IScanHistoryService;

  constructor(@inject("IScanHistoryService") service: IScanHistoryService) {
    this._scanHistoryService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._scanHistoryService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._scanHistoryService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._scanHistoryService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._scanHistoryService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._scanHistoryService.delete(id);
    res.status(204).send();
  }
}
