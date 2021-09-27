import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router

const routes: Routes = [
  {
    path: 'cards',
    loadChildren: () => import('../card/card.module').then((m) => m.CardModule),
  },
  {
    path: 'addCards',
    loadChildren: () =>
      import('../add-card/add-card.module').then((m) => m.AddCardModule),
  },
  {
    path: 'transactions',
    loadChildren: () =>
      import('../transaction/transaction.module').then(
        (m) => m.TransactionModule
      ),
  },
  // { path: '**', component: PageNotFoundComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
