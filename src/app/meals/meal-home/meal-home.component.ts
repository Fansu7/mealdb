import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal.service';
import { IMeal, IMeals } from 'src/app/model/meal';
import { IMappedMeal } from 'src/app/model/mappedMeal';

@Component({
  selector: 'app-meal-home',
  templateUrl: './meal-home.component.html',
  styleUrls: ['./meal-home.component.css'],
})
export class MealHomeComponent implements OnInit {
  meal!: IMappedMeal;

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.mealService.getRandomMeal().subscribe((data: IMeals) => {
      this.meal = {
        mealName: data.meals[0].strMeal,
        mealArea: data.meals[0].strArea,
        mealImg: data.meals[0].strMealThumb,
        mealCategory: data.meals[0].strCategory,
        mealId: data.meals[0].idMeal,
      };
    });
  }
}
