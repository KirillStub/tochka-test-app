import { Component } from '@angular/core';
import { Transaction } from '../../../models/transaction';
import { EventService } from '../../../services/event.service';
import { Router } from '@angular/router';

interface FormModel {
  sum: number;
  currency: string;
  from: string;
  discription: string;
  isExpenditure: boolean;
}

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss']
})
export class NewTransactionComponent {
  transaction: FormModel;

  constructor(private eventService: EventService, private router: Router) {
    this.transaction = {
      sum: null,
      currency: '',
      discription: '',
      from: '',
      isExpenditure: null
    };
  }

  submit() {
    const transaction: Transaction = {
      ... this.transaction,
      ... {
        type: 'transaction',
        date: new Date(),
      }
    };
    this.eventService.addEvent(transaction);
    this.router.navigate(['/events']);
  }

}
