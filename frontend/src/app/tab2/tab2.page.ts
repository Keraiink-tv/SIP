import { Component } from '@angular/core';
import { DrinksService } from '../services/drinks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  newDrink = {
    name: '',
    description: '',
    img: ''
    // Add more properties as needed
  };

  constructor(private drinksService: DrinksService, private router: Router) {}

  createDrink() {
    this.drinksService.createDrink(this.newDrink).subscribe(
      (response) => {
        console.log('Drink created successfully:', response);
        // Reset the form or perform any additional actions after successful creation
        this.resetForm();
        this.router.navigate(['/tabs/tab1']);
      },
      (error) => {
        console.error('Error creating drink:', error);
        // Handle error scenarios
      }
    );
  }

  private resetForm() {
    // Reset the form or clear input fields
    this.newDrink = {
      name: '',
      description: '',
      img: ''
      // Add more properties as needed
    };
}
}
