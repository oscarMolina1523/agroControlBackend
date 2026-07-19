import BaseModel from "./base.model";

export default class ScanHistory extends BaseModel {
  fileName: string;
  resultText: string;
  createdAt: string;
  imageUrl: string;
  userId: string;

  constructor({
    id,
    fileName,
    resultText,
    createdAt,
    imageUrl,
    userId,
  }: {
    id: string;
    fileName: string;
    resultText: string;
    createdAt: string;
    imageUrl: string;
    userId: string;
  }) {
    super(id);
    this.fileName = fileName;
    this.resultText = resultText;
    this.createdAt = createdAt;
    this.imageUrl = imageUrl;
    this.userId = userId;
  }
}
