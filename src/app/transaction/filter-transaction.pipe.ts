import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from 'projects/models/src/lib/transaction';

@Pipe({
  name: 'filterTransaction',
})
export class FilterTransactionPipe implements PipeTransform {
  transform(
    transactions: Transaction[] | null,
    value: number
  ): Transaction[] | null {
    if (!transactions || !value) {
      return transactions;
    }

    let trans: Transaction[] = transactions.filter((transaction) => {
      return transaction.credit_card.card_number === value;
    });

    return trans;
  }
}
