import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterTransactionPipe } from './filter-transaction.pipe';
import { ListComponent } from './list/list.component';
import { TransactionRoutingModule } from './transaction-routing.module';

@NgModule({
  declarations: [ListComponent, FilterTransactionPipe],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class TransactionModule {}
