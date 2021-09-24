import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCardRoutingModule } from './add-card-routing.module';
import { AddCardComponent } from './add-card/add-card.component';


@NgModule({
  declarations: [
    AddCardComponent
  ],
  imports: [
    CommonModule,
    AddCardRoutingModule
  ]
})
export class AddCardModule { }
