import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  // { path: ':id', component: DetailsComponent },
  { path: '**', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
