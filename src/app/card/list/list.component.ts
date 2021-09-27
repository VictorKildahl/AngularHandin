import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'projects/models/src/public-api';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  cards$: Observable<any[]>;
  error = '';

  constructor(private cs: CardService, private router: Router) {
    this.cards$ = this.cs.cards();
  }

  navigateToDetails(index: Number, card: Card) {
    this.router.navigate(['/details/' + index, card]);
  }

  ngOnInit(): void {
    this.cards$ = this.cs.cards().pipe(
      catchError((e: HttpErrorResponse) => {
        console.error(e.message);
        if (e.status === 0) {
          this.error = 'Client-side or network error';
        } else {
          this.error = 'Endpoint returned an unsuccessful response code';
        }
        let error: CardError = {
          message: e.message,
          status_code: e.status,
        };
        return of([error]);
      })
    );
  }
}
export interface CardError {
  message: string;
  status_code: number;
}
