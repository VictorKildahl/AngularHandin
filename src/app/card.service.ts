import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from 'projects/models/src/lib/transaction';
import { Card } from 'projects/models/src/public-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  rootUrl = `http://localhost:3000`;

  constructor(private http: HttpClient) {}

  cards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.rootUrl}/credit_cards`);
  }

  removeCreditCard(card: Card): Observable<Card[]> {
    return this.http.delete<Card[]>(`${this.rootUrl}/credit_cards`);
  }

  transactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.rootUrl}/transactions`);
  }
}
