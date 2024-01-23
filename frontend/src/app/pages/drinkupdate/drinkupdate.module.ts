import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrinkupdatePageRoutingModule } from './drinkupdate-routing.module';

import { DrinkupdatePage } from './drinkupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrinkupdatePageRoutingModule
  ],
  declarations: [DrinkupdatePage]
})
export class DrinkupdatePageModule {}
