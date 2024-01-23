import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../services/drinks.service';
import { Subscription } from 'rxjs';
import { Drink } from '../models/drink.model';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  drinks: Drink [] = [];
  drinkSub: Subscription = new Subscription;

  constructor(private drinkService: DrinksService) {}

  ngOnInit() {
    try {
      this.drinkSub = this.drinkService.getDrink().subscribe(
        (Drink: Drink[]) => {
          this.drinks = Drink;
        }, 
        (error: any) => {
          console.error('error');
        }
      );
    } catch (error) {
      console.error('error');
    }
  }

}
