import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../models/event';
import { SortType } from '../models/sort-type';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(events: Event[], sortBy: SortType): Event[] {
    if (!events || !events.length) {
      return null;
    }
    switch (sortBy) {
      case 'date':
        return events.sort((e1, e2) => e1.date.getTime() - e2.date.getTime());
      case '-date':
        return events.sort((e1, e2) => e2.date.getTime() - e1.date.getTime());
      case 'type':
        return events.sort((e1, e2) => {
          if (e1.type > e2.type) {
            return 1;
          } else if (e1.type < e2.type) {
            return -1;
          } else {
            return 0;
          }
        });
      case '-type':
        return events.sort((e1, e2) => {
          if (e1.type > e2.type) {
            return -1;
          } else if (e1.type < e2.type) {
            return 1;
          } else {
            return 0;
          }
        });
      default:
        return events;
    }
  }

}
