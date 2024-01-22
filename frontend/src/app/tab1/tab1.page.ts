import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../services/drinks.service';
import { Drink } from '../models/drink.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
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
