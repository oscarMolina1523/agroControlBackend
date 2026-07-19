import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IReportService } from './../../Application/interfaces/report.service.interface';

@injectable()
export class ReportController {

  private readonly _reportService: IReportService;

  constructor(@inject("IReportService") service: IReportService) {
    this._reportService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._reportService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._reportService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._reportService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._reportService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._reportService.delete(id);
    res.status(204).send();
  }
}
