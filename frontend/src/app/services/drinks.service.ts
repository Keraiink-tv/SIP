import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from '../models/drink.model';
import { DomSanitizer } from '@angular/platform-browser';




@Injectable({
    providedIn: 'root'
  })
 
  export class DrinksService {
    private apiUrl = 'http://localhost:8000/drinks/get'
    private Drink: Drink [] = [];

    constructor(private http: HttpClient,
                private sanitizer: DomSanitizer) {}

    

    fetchDrinks(): void {
      this.http
      .get<Drink[]>('http://localhost:8000/drinks/get')
      .subscribe(
        (response) => {
          this.Drink = response;
        },
        (error) => {
          console.error(error);
        }

        
      );

     
    }

    getDrink(): Observable<Drink[]> {
      return this.http.get<Drink[]>(this.apiUrl);
    }
  }

