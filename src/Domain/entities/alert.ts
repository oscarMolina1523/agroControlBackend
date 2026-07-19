import BaseModel from "./base.model";

export default class Alert extends BaseModel {
  emoji: string;
  title: string;
  description: string;
  time: string;
  severity: string;
  resolved: boolean;
  source: string;
  targetPage: string;
  targetId: string;

  constructor({
    id,
    emoji,
    title,
    description,
    time,
    severity,
    resolved,
    source,
    targetPage,
    targetId,
  }: {
    id: string;
    emoji: string;
    title: string;
    description: string;
    time: string;
    severity: string;
    resolved: boolean;
    source: string;
    targetPage: string;
    targetId: string;
  }) {
    super(id);
    this.emoji = emoji;
    this.title = title;
    this.description = description;
    this.time = time;
    this.severity = severity;
    this.resolved = resolved;
    this.source = source;
    this.targetPage = targetPage;
    this.targetId = targetId;
  }
}
