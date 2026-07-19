import ChatMessage from "../../Domain/entities/chatMessage";
import { ChatMessageDto } from './../dtos/chatMessage.dto';

export interface IChatMessageService {
  findAll(page: number, pageSize: number): Promise<ChatMessage[]>;
  findById(id: string): Promise<ChatMessage | null>;
  create(data: ChatMessageDto): Promise<ChatMessage>;
  update(id: string, data: ChatMessageDto): Promise<ChatMessage | null>;
  delete(id: string): Promise<void>;
}
