import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMappedMeal, IMappedMeals } from 'src/app/model/mappedMeal';
import { IMappedMealDetail } from 'src/app/model/mappedMealDetail';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.css'],
})
export class MealCardComponent {
  @Input() meal!: IMappedMeal;
  @Input() mealDetail!: IMappedMealDetail;

  constructor(private router: Router) {}

  recipeDetail() {
    this.router.navigate(['meals/detail', this.meal.mealId]);
  }
}
