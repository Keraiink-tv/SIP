import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../components/card/card.component';
import { FormsModule } from '@angular/forms';
import { MydrinksComponent } from '../components/mydrinks/mydrinks.component';

@NgModule({
    declarations: [
        CardComponent, MydrinksComponent
    ],
    imports: [CommonModule, IonicModule, RouterModule, FormsModule],
    exports: [
        CardComponent, MydrinksComponent
    ],
    
})
export class SharedModule {}