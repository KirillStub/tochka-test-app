import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { EventService } from './services/event.service';
import { NewTransactionComponent } from './components/transaction/new-transaction/new-transaction.component';
import { TransactionDetailsComponent } from './components/transaction/transaction-details/transaction-details.component';
import { NewsDetailsComponent } from './components/news/news-details/news-details.component';
import { NewNewsComponent } from './components/news/new-news/new-news.component';
import { TimelineNewsComponent } from './components/news/timeline-news/timeline-news.component';
import { TimelineTransactionComponent } from './components/transaction/timeline-transaction/timeline-transaction.component';
import { SortPipe } from './pipes/sort.pipe';
import { HomeComponent } from './components/home/home.component';
import { EventPlaceholderComponent } from './components/event-placeholder/event-placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    NewTransactionComponent,
    TransactionDetailsComponent,
    NewsDetailsComponent,
    NewNewsComponent,
    HomeComponent,
    TimelineNewsComponent,
    TimelineTransactionComponent,
    SortPipe,
    HomeComponent,
    EventPlaceholderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'events',
        component: HomeComponent,
        children: [
          {
            path: '',
            component: EventPlaceholderComponent
          },
          {
            path: ':id',
            component: EventComponent
          }
        ]
      },
      {
        path: 'new-news',
        component: NewNewsComponent,
      },
      {
        path: 'new-transaction',
        component: NewTransactionComponent,
      },
      {
        path: '**',
        redirectTo: 'events'
      }
    ])
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
