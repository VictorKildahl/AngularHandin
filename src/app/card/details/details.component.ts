import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'projects/models/src/lib/transaction';
import { Card } from 'projects/models/src/public-api';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  card: Card;

  transactions$: Observable<Transaction[]>;
  filteredTransactions$: Observable<Transaction[]> | null;
  error = '';

  constructor(
    private cs: CardService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.card = this.activatedRoute.snapshot.params as Card;
    this.transactions$ = this.cs.transactions();
    this.filteredTransactions$ = null;
  }

  removeCreditCard(card: Card) {
    this.cs.removeCreditCard(card);
    this.router.navigate(['/']);
  }

  //Virker ikke (tag et kig igen næste gang)
  ngOnInit(): void {
    this.filteredTransactions$ = this.transactions$.pipe(
      switchMap((x) =>
        of(
          x.filter(
            (x1: Transaction) =>
              x1.credit_card.card_number === this.card.card_number
          )
        )
      )
    );
  }
}

export interface TransactionError {
  message: string;
  status_code: number;
}
