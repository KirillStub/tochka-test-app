import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { SortType } from '../../models/sort-type';
import { Event } from '../../models/event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  events: Event[] = [];
  sortBy: SortType;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.eventService.events.subscribe(e => this.events = e);
  }

  sortingByDate() {
    this.sortBy = this.sortBy === 'date' ? '-date' : 'date';
  }

  sortingByType() {
    this.sortBy = this.sortBy === 'type' ? '-type' : 'type';
  }

}
