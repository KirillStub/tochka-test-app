import { Component, Input } from '@angular/core';
import { Transaction } from '../../../models/transaction';
import { EventService } from '../../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent {
  @Input() transaction: Transaction;

  constructor(private eventService: EventService, private router: Router) { }

  delete() {
    this.eventService.deleteTransaction(this.transaction.id);
    this.router.navigate(['/events']);
  }
}
