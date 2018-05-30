import { Component, Input } from '@angular/core';
import { News } from '../../../models/news';
import { EventService } from '../../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent {
  @Input() news: News;

  constructor(private eventService: EventService, private router: Router) { }

  readed() {
    this.eventService.setAsReaded(this.news.id);
    this.router.navigate(['/navigate']);
  }

}
