import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private cs: CardService) {
    this.cards$ = this.cs.cards();
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
