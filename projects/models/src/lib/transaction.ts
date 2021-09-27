import { Card } from './card';

export interface Transaction {
  credit_card: Card;
  amount: number;
  comment: string;
  date: string;
  currency: string;
}
