import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../components/card/card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [CommonModule, IonicModule, RouterModule, FormsModule],
    exports: [
        CardComponent
    ],
    
})
export class SharedModule {}