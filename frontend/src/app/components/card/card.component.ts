import { Component, Input, OnInit } from '@angular/core';
import { Drink } from 'src/app/models/drink.model';
import { DrinksService } from 'src/app/services/drinks.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [DrinksService]
})
export class CardComponent  implements OnInit {
  
  @Input() drinks: Drink = {
    id: 0,
    name: "name",
    description: "description",
    img: "string"
  }

  constructor(private drinkService: DrinksService) { }

  ngOnInit() {
    this.drinkService.fetchDrinks();
  }

}
