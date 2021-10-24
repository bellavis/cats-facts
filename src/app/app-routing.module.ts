import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFactsComponent } from './all-facts/all-facts.component'
import { MyFactsComponent } from './my-facts/my-facts.component'

const routes: Routes = [
  { path: '', component: AllFactsComponent },
  { path: 'my-facts', component: MyFactsComponent },
  { path: 'all-facts', component: AllFactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


