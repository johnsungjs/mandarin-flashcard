export type Card = {
  id: string;
  hanzi: string;
  pinyin: string;
  meaning: string;
  mastered: boolean;
  lastSeen?: number | null;
};