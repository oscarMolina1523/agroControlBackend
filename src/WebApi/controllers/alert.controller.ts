import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IAlertService } from './../../Application/interfaces/alert.service.interface';

@injectable()
export class AlertController {

  private readonly _alertService: IAlertService;

  constructor(@inject("IAlertService") service: IAlertService) {
    this._alertService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._alertService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._alertService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._alertService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._alertService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._alertService.delete(id);
    res.status(204).send();
  }
}
