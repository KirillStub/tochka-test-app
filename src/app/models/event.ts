export type EventType = 'news' | 'transaction';

export interface Event {
  id?: number;
  type: EventType;
  date: Date;
}
