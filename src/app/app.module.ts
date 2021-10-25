import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AllFactsComponent } from './all-facts/all-facts.component';
import { MyFactsComponent } from './my-facts/my-facts.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    AllFactsComponent,
    MyFactsComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'all-facts', component: AllFactsComponent },
      { path: 'my-facts', component: MyFactsComponent },
      { path: '', redirectTo: '/all-facts', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
