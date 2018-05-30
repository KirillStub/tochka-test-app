import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Event } from '../models/event';
import { Transaction } from '../models/transaction';
import { News } from '../models/news';

const defaultEvents = [
  <News>
  {
    id: 1,
    date: new Date('2018-05-13 12:00'),
    type: 'news',
    title: '"Spiderman rescue": Moment Malian man rescues Paris child.',
    text: 'A Malian migrant has been hailed a hero after he scaled the front of a building ' +
      'in Paris to save a child hanging from a fourth-floor balcony. Video of Mamoudou Gassama`s ' +
      'spectacular rescue went viral on social media and he is to be made a French citizen.'
  },
  <News>
  {
    id: 2,
    date: new Date('2018-05-12 2:00'),
    type: 'news',
    title: 'Fabinho: Liverpool agree £39m deal for Monaco midfielder',
    text: 'The Brazil international, 24, will join the Champions League finalists on 1 July for around £39m (45m euros). A further' +
      ' £4m (5m euros) could be added in performance-related bonus payments and Fabinho`s arrival will likely be followed by the ' +
      'departure of Emre Can. "This is something that I always wanted - this is a giant of a team," said Fabinho. "I am really excited."'
  },
  <Transaction>
  {
    id: 3,
    currency: 'руб',
    date: new Date('2018-05-11 20:00'),
    discription: 'Заправка автомоболя',
    from: 'Kirill Rodin',
    isExpenditure: true,
    sum: 2000,
    type: 'transaction'
  },
  <Transaction>
  {
    id: 4,
    currency: '$',
    date: new Date('2018-05-11 15:20'),
    discription: 'Бонус',
    from: 'Kirill Rodin',
    isExpenditure: false,
    sum: 2000,
    type: 'transaction'
  }
];

@Injectable()
export class EventService {
  events: BehaviorSubject<Event[]>;
  private _events: Event[] = defaultEvents;

  constructor() {
    this.events = new BehaviorSubject(this._events);
  }

  getEvent(id: number): Event {
    return this._events.find(e => e.id === id);
  }

  addEvent(event: Event) {
    event.id = new Date().getTime();
    this._events.push(event);
    this.events.next(this._events);
  }

  setAsReaded(newsId: number) {
    const news: News = <News>this.getEvent(newsId);
    news.isRead = true;
  }

  deleteTransaction(transactionId: number) {
    this._events = this._events.filter(e => e.id !== transactionId);
    this.events.next(this._events);
  }
}
