import { Event } from './event';

export interface News extends Event {
  title: string;
  text: string;
  isRead?: boolean;
}
