import { Component, OnInit } from '@angular/core';
import { IMeals } from 'src/app/model/meal';
import { MealService } from '../meal.service';
import { IMappedMeal, IMappedMeals } from 'src/app/model/mappedMeal';

@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.css'],
})
export class MealsListComponent implements OnInit {
  letters!: string[];
  meals!: IMappedMeals;

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.mealService.getMeals('a').subscribe((data: IMeals) => {
      this.meals = { meals: [] };
      for (const element of data.meals) {
        const meal: IMappedMeal = {
          mealName: element.strMeal,
          mealArea: element.strArea,
          mealImg: element.strMealThumb,
          mealCategory: element.strCategory,
          mealId: element.idMeal,
        };
        this.meals.meals.push(meal);
      }
    });
  }

  searchLetter(letter: string) {
    this.mealService.getMeals(letter).subscribe((data: IMeals) => {
      this.meals = { meals: [] };
      if (data.meals) {
        const hidden = <HTMLElement>(
          document.getElementsByClassName('no-meals')[0]
        );
        if (hidden) {
          hidden.classList.add('hidden');
        }
        for (const element of data.meals) {
          const meal: IMappedMeal = {
            mealName: element.strMeal,
            mealArea: element.strArea,
            mealImg: element.strMealThumb,
            mealCategory: element.strCategory,
            mealId: element.idMeal,
          };
          this.meals.meals.push(meal);
        }
      } else {
        const hidden = <HTMLElement>(
          document.getElementsByClassName('hidden')[0]
        );
        hidden.classList.remove('hidden');
      }
    });
  }
}
