/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IChatMessageRepository } from "../../Domain/repositories/chatMessageRepository.interface";
import ChatMessage  from "../../Domain/entities/chatMessage";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class ChatMessageRepository implements IChatMessageRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<ChatMessage[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<ChatMessage | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: ChatMessage) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: ChatMessage): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: ChatMessage): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
