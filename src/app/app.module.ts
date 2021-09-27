import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from './card/card.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, NavigationBarComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
