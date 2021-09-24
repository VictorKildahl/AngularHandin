import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardListItemComponent } from '../card/card-list-item/card-list-item.component';
import { CardRoutingModule } from './card-routing.module';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent, DetailsComponent, CardListItemComponent],
  imports: [CommonModule, CardRoutingModule],
})
export class CardModule {}
