import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IArduinoService } from './../../Application/interfaces/arduino.service.interface';

@injectable()
export class ArduinoController {

  private readonly _arduinoService: IArduinoService;

  constructor(@inject("IArduinoService") service: IArduinoService) {
    this._arduinoService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._arduinoService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._arduinoService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._arduinoService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._arduinoService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._arduinoService.delete(id);
    res.status(204).send();
  }
}
