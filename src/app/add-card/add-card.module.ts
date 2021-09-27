import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCardRoutingModule } from './add-card-routing.module';
import { AddCardComponent } from './add-card/add-card.component';

@NgModule({
  declarations: [AddCardComponent],
  imports: [CommonModule, AddCardRoutingModule, ReactiveFormsModule],
})
export class AddCardModule {}
