import { inject, injectable } from "tsyringe";
import { IChatMessageService } from "../interfaces/chatMessage.service.interface";
import { IChatMessageRepository } from "../../Domain/repositories/chatMessageRepository.interface";
import { ChatMessageDto } from "../dtos/chatMessage.dto";
import ChatMessage from "../../Domain/entities/chatMessage";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class ChatMessageService implements IChatMessageService {
  private readonly _chatMessageRepository: IChatMessageRepository;

  constructor(@inject("IChatMessageRepository") repository: IChatMessageRepository) {
    this._chatMessageRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<ChatMessage[]> {
    return await this._chatMessageRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<ChatMessage | null> {
    return await this._chatMessageRepository.findById(id);
  }
  
  async create(data: ChatMessageDto): Promise<ChatMessage> {
    const newData: ChatMessage = {
      ...data,
      id: generateId(), 
    }
    await this._chatMessageRepository.create(newData);
    return newData;
  }

  async update(id: string, data: ChatMessageDto): Promise<ChatMessage | null> {
    const existing = await this._chatMessageRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: ChatMessage = {
      ...data,
      id,
    }
    await this._chatMessageRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._chatMessageRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._chatMessageRepository.delete(existing);
  }
}
