import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from '../models/drink.model';

const apiUrl = 'https://localhost:8000/drinks';

@Injectable({
    providedIn: 'root'
  })
  export class DrinksService {
  
    constructor(private http: HttpClient) { }
  
    getAllDrinks(): Observable<Drink[]> {
      return this.http.get<Drink[]>(apiUrl + "/getall");
    }
  
    getSpecificDrink(id: any): Observable<Drink> {
      return this.http.get(`${apiUrl}/${id}`);
    }

  // Other methods for handling different HTTP methods (POST, PUT, DELETE, etc.)
}

