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

  addCard(card: Card): Observable<Card> {
    return this.http.post<Card>(`${this.rootUrl}/credit_cards`, card);
  }

  removeCreditCard(card_number: string): Observable<Card> {
    return this.http.delete<Card>(
      `${this.rootUrl}/credit_cards/${card_number}`
    );
  }

  transactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.rootUrl}/transactions`);
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(
      `${this.rootUrl}/transactions`,
      transaction
    );
  }

  removeTransaction(transaction: Transaction): Observable<Transaction[]> {
    return this.http.delete<Transaction[]>(
      `${this.rootUrl}/transactions/${transaction}`
    );
  }
}
