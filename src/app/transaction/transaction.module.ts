import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { TransactionRoutingModule } from './transaction-routing.module';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, TransactionRoutingModule, ReactiveFormsModule],
})
export class TransactionModule {}
