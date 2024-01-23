import { Component, OnInit } from '@angular/core';
import { Drink } from 'src/app/models/drink.model';
import { DrinksService } from 'src/app/services/drinks.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drinkupdate',
  templateUrl: './drinkupdate.page.html',
  styleUrls: ['./drinkupdate.page.scss'],
})
export class DrinkupdatePage implements OnInit {

  drink: Drink = {} as Drink;
  shownDrink: Drink [] = [];
  item = null as any;
  drinkId: number;

  newDrink: any = {
    id: '',
    name: '',
    description: '',
    img: ''
  };

  constructor(private drinkService: DrinksService, private activatedRoute: ActivatedRoute, private router: Router) { }

  fetchDrinkOnId(id: number) {
    if (id) {
     const drink = this.shownDrink.find(drink => drink.id === id);
     if (drink) {
        this.drink = drink;
        this.newDrink.id = this.drink.id;
        this.newDrink.name = this.drink.name;
        this.newDrink.description = this.drink.description;
        this.newDrink.img = this.drink.img;
     }
    }
    this.drinkId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.drinkId);
   }

   updateDrink() {
    this.drinkService.updateDrink(this.newDrink.id, this.newDrink)
    .subscribe(
      () => {
        console.log('Drink updated successfully');
        // Handle success (e.g., navigate back to the drink details page)
        this.router.navigate(['/tabs/tab1']);
      },
      (error) => {
        console.error('Error updating drink:', error);
        // Handle error (e.g., display an error message)
      }
    );
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.drinkId = id ? Number(id) : undefined; 
      this.drinkService.getDrink().subscribe(drinks => {
        this.shownDrink = drinks;
        this.fetchDrinkOnId(this.drinkId);
      });
    });
  }

}
