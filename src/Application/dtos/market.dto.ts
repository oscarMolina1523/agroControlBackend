export interface MarketDto {
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
}
