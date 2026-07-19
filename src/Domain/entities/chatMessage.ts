import BaseModel from "./base.model";

export default class ChatMessage extends BaseModel {
  role: string;
  text: string;
  timestamp: number;
  userId: string;

  constructor({
    id,
    role,
    text,
    timestamp,
    userId,
  }: {
    id: string;
    role: string;
    text: string;
    timestamp: number;
    userId: string;
  }) {
    super(id);
    this.role = role;
    this.text = text;
    this.timestamp = timestamp;
    this.userId = userId;
  }
}
