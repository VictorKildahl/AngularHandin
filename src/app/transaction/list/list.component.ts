import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Transaction } from 'projects/models/src/lib/transaction';
import { Card } from 'projects/models/src/public-api';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CardService } from 'src/app/card/card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  transactionForm = this.formBuilder.group({
    credit_card: [''],
    amount: [''],
    currency: [''],
    date: [''],
  });

  transactions$: Observable<any[]>;
  credit_cards$: Observable<Card[]>;
  error = '';

  constructor(
    private cs: CardService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.transactions$ = this.cs.transactions();
    this.credit_cards$ = this.cs.cards();
  }

  removeTransaction(transaction: Transaction) {
    this.cs.removeTransaction(transaction).subscribe((_) => {
      this.router.navigate(['/']);
    });
  }

  compareCreditCards(c1: Card, c2: Card) {
    return c1 && c2 ? c1.card_number === c2.card_number : c1 === c2;
  }

  ngOnInit(): void {
    this.transactions$ = this.cs.transactions().pipe(
      catchError((e: HttpErrorResponse) => {
        console.error(e.message);
        if (e.status === 0) {
          this.error = 'Client-side or network error';
        } else {
          this.error = 'Endpoint returned an unsuccessful response code';
        }
        let error: TransactionError = {
          message: e.message,
          status_code: e.status,
        };
        return of([error]);
      })
    );
  }

  onSubmit() {
    this.cs.addTransaction(this.transactionForm.value).subscribe();
    console.log(this.transactionForm.value);
  }
}

export interface TransactionError {
  message: string;
  status_code: number;
}
