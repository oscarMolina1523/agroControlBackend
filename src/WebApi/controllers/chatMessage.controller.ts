import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IChatMessageService } from './../../Application/interfaces/chatMessage.service.interface';

@injectable()
export class ChatMessageController {

  private readonly _chatMessageService: IChatMessageService;

  constructor(@inject("IChatMessageService") service: IChatMessageService) {
    this._chatMessageService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._chatMessageService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._chatMessageService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._chatMessageService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._chatMessageService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._chatMessageService.delete(id);
    res.status(204).send();
  }
}
