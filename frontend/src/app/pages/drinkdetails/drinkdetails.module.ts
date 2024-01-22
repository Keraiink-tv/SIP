import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrinkdetailsPageRoutingModule } from './drinkdetails-routing.module';

import { DrinkdetailsPage } from './drinkdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrinkdetailsPageRoutingModule
  ],
  declarations: [DrinkdetailsPage]
})
export class DrinkdetailsPageModule {}
