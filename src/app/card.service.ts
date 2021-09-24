import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
