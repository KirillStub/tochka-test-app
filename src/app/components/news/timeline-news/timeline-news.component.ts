import { Component, Input } from '@angular/core';
import { News } from '../../../models/news';

@Component({
  selector: 'app-timeline-news',
  templateUrl: './timeline-news.component.html',
  styleUrls: ['./timeline-news.component.scss']
})
export class TimelineNewsComponent {
  @Input() news: News;

  constructor() { }

}
