import BaseModel from "./base.model";

export default class Market extends BaseModel {
  name: string;
  description: string;
  price: number;
  status: string;
  category: string;
  imageUrl: string[];
  entityId: string;
  startingPrice: number;
  currentBid: number;
  highestBidderId: string;
  bidCount: number;
  createdAt: string;
  endDate: string;
  lotSize: number;
  unit: string;

  constructor({
    id,
    name,
    description,
    price,
    status,
    category,
    imageUrl,
    entityId,
    startingPrice,
    currentBid,
    highestBidderId,
    bidCount,
    createdAt,
    endDate,
    lotSize,
    unit,
  }: {
    id: string;
    name: string;
    description: string;
    price: number;
    status: string;
    category: string;
    imageUrl: string[];
    entityId: string;
    startingPrice: number;
    currentBid: number;
    highestBidderId: string;
    bidCount: number;
    createdAt: string;
    endDate: string;
    lotSize: number;
    unit: string;
  }) {
    super(id);
    this.name = name;
    this.description = description;
    this.price = price;
    this.status = status;
    this.category = category;
    this.imageUrl = imageUrl;
    this.entityId = entityId;
    this.startingPrice = startingPrice;
    this.currentBid = currentBid;
    this.highestBidderId = highestBidderId;
    this.bidCount = bidCount;
    this.createdAt = createdAt;
    this.endDate = endDate;
    this.lotSize = lotSize;
    this.unit = unit;
  }
}
