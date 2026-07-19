export interface AlertDto {
  emoji: string;
  title: string;
  description: string;
  time: string;
  severity: string;
  resolved: boolean;
  source: string;
  targetPage: string;
  targetId: string;
}
