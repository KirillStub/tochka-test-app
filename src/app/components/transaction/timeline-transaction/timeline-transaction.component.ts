import { Component, Input } from '@angular/core';
import { Transaction } from '../../../models/transaction';

@Component({
  selector: 'app-timeline-transaction',
  templateUrl: './timeline-transaction.component.html',
  styleUrls: ['./timeline-transaction.component.scss']
})
export class TimelineTransactionComponent {
  @Input() transaction: Transaction;

  constructor() { }

}
