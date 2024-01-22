import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrinkdetailsPage } from './drinkdetails.page';

const routes: Routes = [
  {
    path: '',
    component: DrinkdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrinkdetailsPageRoutingModule {}
