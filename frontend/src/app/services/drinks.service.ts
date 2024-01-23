import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from '../models/drink.model';


@Injectable({
    providedIn: 'root'
  })

  export class DrinksService {
    private apiUrl = 'http://localhost:8000/drinks/get'
    private Drink: Drink [] = [];

    constructor(private http: HttpClient) {}
    

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

    deleteDrink(id: number): Observable<Drink[]> {
      const url = `http://localhost:8000/drinks/delete/${id}`;
      return this.http.delete<Drink[]>(url)
    }

    updateDrink(id: number, data): Observable<Drink[]> {
      const url = `http://localhost:8000/drinks/update/${id}`;
      return this.http.put<Drink[]>(url, data);
    }

    createDrink(data: any): Observable<Drink[]> {
      return this.http.post<Drink[]>('http://localhost:8000/drinks/post', data)
    }
  }

