import { Component } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { News } from '../../../models/news';
import { Router } from '@angular/router';

interface FormModel {
  title: string;
  text: string;
}

@Component({
  selector: 'app-new-news',
  templateUrl: './new-news.component.html',
  styleUrls: ['./new-news.component.scss']
})
export class NewNewsComponent {
  news: FormModel;

  constructor(private eventService: EventService, private router: Router) {
    this.news = {
      title: '',
      text: ''
    };
  }

  submit() {
    const news: News = {
      ... this.news,
      ... {
        type: 'news',
        date: new Date(),
      }
    };
    this.eventService.addEvent(news);
    this.router.navigate(['/events']);
  }

}
