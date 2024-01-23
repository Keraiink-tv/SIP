import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrinkupdatePage } from './drinkupdate.page';

const routes: Routes = [
  {
    path: '',
    component: DrinkupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrinkupdatePageRoutingModule {}
