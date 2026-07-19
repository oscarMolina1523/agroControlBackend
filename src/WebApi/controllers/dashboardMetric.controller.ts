import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IDashboardMetricService } from './../../Application/interfaces/dashboardMetric.service.interface';

@injectable()
export class DashboardMetricController {

  private readonly _dashboardMetricService: IDashboardMetricService;

  constructor(@inject("IDashboardMetricService") service: IDashboardMetricService) {
    this._dashboardMetricService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._dashboardMetricService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._dashboardMetricService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._dashboardMetricService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._dashboardMetricService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._dashboardMetricService.delete(id);
    res.status(204).send();
  }
}
