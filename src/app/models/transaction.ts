import { Event } from './event';

export interface Transaction extends Event {
  sum: number;
  currency: string;
  from: string;
  discription: string;
  isExpenditure: boolean;
}
