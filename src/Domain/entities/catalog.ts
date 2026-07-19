import BaseModel from "./base.model";

export default class Catalog extends BaseModel {
  title: string;
  author: string;
  modelPath: string;
  nutritionalInfo: string;
  growthPeriod: string;
  waterRequirements: string;
  recommendedFertilizers: string;
  commonDiseases: string;
  parcels: string[];
  estimatedProduction: string;
  currentPrice: number;
  modelType: string;

  constructor({
    id,
    title,
    author,
    modelPath,
    nutritionalInfo,
    growthPeriod,
    waterRequirements,
    recommendedFertilizers,
    commonDiseases,
    parcels,
    estimatedProduction,
    currentPrice,
    modelType,
  }: {
    id: string;
    title: string;
    author: string;
    modelPath: string;
    nutritionalInfo: string;
    growthPeriod: string;
    waterRequirements: string;
    recommendedFertilizers: string;
    commonDiseases: string;
    parcels: string[];
    estimatedProduction: string;
    currentPrice: number;
    modelType: string;
  }) {
    super(id);
    this.title = title;
    this.author = author;
    this.modelPath = modelPath;
    this.nutritionalInfo = nutritionalInfo;
    this.growthPeriod = growthPeriod;
    this.waterRequirements = waterRequirements;
    this.recommendedFertilizers = recommendedFertilizers;
    this.commonDiseases = commonDiseases;
    this.parcels = parcels;
    this.estimatedProduction = estimatedProduction;
    this.currentPrice = currentPrice;
    this.modelType = modelType;
  }
}
