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

  removeCreditCard(card_number: number) {
    this.cs.removeCreditCard('' + card_number).subscribe((_) => {
      this.router.navigate(['/']);
    });
  }

  //Burde The application must implement at least one custom pipe //Er dette nok?
  ngOnInit(): void {
    this.filteredTransactions$ = this.transactions$.pipe(
      switchMap((x) => {
        let res = of(
          x.filter((x1: Transaction) => {
            return +x1.credit_card.card_number === +this.card.card_number;
          })
        );
        res.subscribe(console.log);
        return res;
      })
    );
  }
}

export interface TransactionError {
  message: string;
  status_code: number;
}
