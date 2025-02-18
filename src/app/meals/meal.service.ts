import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMeals } from '../model/meal';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  constructor(private http: HttpClient) {}

  getRandomMeal(): Observable<IMeals> {
    const url = 'https://themealdb.com/api/json/v1/1/random.php';
    return this.http.get<IMeals>(url);
  }

  getMeals(letter: string): Observable<IMeals> {
    const url =
      'https://www.themealdb.com/api/json/v1/1/search.php?f=' + letter;
    return this.http.get<IMeals>(url);
  }

  getMealDetail(mealId: number): any {
    const url =
      'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId;
    return this.http.get<IMeals>(url);
  }
}
