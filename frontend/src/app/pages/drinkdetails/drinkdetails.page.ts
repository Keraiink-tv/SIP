import { Component, OnInit } from '@angular/core';
import { Drink } from 'src/app/models/drink.model';
import { DrinksService } from 'src/app/services/drinks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drinkdetails',
  templateUrl: './drinkdetails.page.html',
  styleUrls: ['./drinkdetails.page.scss'],
})
export class DrinkdetailsPage implements OnInit {
  drink: Drink = {} as Drink;
  shownDrink: Drink [] = [];
  item = null as any;
  drinkId: number;

  constructor(
    private drinksService: DrinksService,
    private activatedRoute: ActivatedRoute,
  ) { }

  fetchDrinkOnId(id: number) {
   if (id) {
    const drink = this.shownDrink.find(drink => drink.id === id);
    if (drink) {
      this.drink = drink;
    }
   }
   this.drinkId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
   console.log(this.drinkId);
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.drinkId = id ? Number(id) : undefined; 
      this.drinksService.getDrink().subscribe(drinks => {
        this.shownDrink = drinks;
        this.fetchDrinkOnId(this.drinkId);
      });
    });
  }

}
