import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IParcelService } from './../../Application/interfaces/parcel.service.interface';

@injectable()
export class ParcelController {

  private readonly _parcelService: IParcelService;

  constructor(@inject("IParcelService") service: IParcelService) {
    this._parcelService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._parcelService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._parcelService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._parcelService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._parcelService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._parcelService.delete(id);
    res.status(204).send();
  }
}
