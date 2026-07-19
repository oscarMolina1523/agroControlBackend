import ChatMessage from '../entities/chatMessage';

export interface IChatMessageRepository {
  findAll(page: number, pageSize: number): Promise<ChatMessage[]>;
  findById(id: string): Promise<ChatMessage | null>;
  create(data: ChatMessage): Promise<void>;
  update(data: ChatMessage): Promise<void>;
  delete(data: ChatMessage): Promise<void>;
}
