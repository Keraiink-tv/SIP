import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DrinksService } from 'src/app/services/drinks.service';
import { Drink } from 'src/app/models/drink.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mydrinks',
  templateUrl: './mydrinks.component.html',
  styleUrls: ['./mydrinks.component.scss'],
  providers: [DrinksService]
})
export class MydrinksComponent  implements OnInit {
  
  drink: Drink = {} as Drink;
  shownDrink: Drink [] = [];

  @Input() drinks: Drink = {
    id: 0,
    name: "name",
    description: "description",
    img: "string"
  }

  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>();
  
  
  constructor(private drinkService: DrinksService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.drinkService.fetchDrinks();
  }

  deleteDrink() { 
    // Call the delete method of the service
    this.drinkService.deleteDrink(this.drinks.id).subscribe(
      () => {
        console.log('Drink deleted successfully');
        // Emit an event to notify the parent component (Tab3Page) that the drink has been deleted
        this.deleteEvent.emit(this.drinks.id);
      },
      (error: any) => {
        console.error('Error deleting drink:', error);
      }
    );
  }
  }



