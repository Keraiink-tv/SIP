import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../services/drinks.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(private drinkService: DrinksService) {}

  ngOnInit() {
    this.drinkService.getAllDrinks().subscribe(res => {
      console.log(res);
    })
  }

}
