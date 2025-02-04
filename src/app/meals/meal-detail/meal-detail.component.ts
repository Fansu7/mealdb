import { Component, Input } from '@angular/core';
import { MealService } from '../meal.service';
import { IMeal, IMeals } from 'src/app/model/meal';
import { IMappedMealDetail } from 'src/app/model/mappedMealDetail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css'],
})
export class MealDetailComponent {
  mealDetail!: IMappedMealDetail;

  constructor(
    private mealService: MealService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.mealService
      .getMealDetail(this.route.snapshot.params['id'])
      .subscribe((data: IMeals) => {
        const meal: IMeal = data.meals[0];
        this.mealDetail = {
          mealName: meal.strMeal,
          mealArea: meal.strArea,
          mealImg: meal.strMealThumb,
          mealCategory: meal.strCategory,
          mealId: meal.idMeal,
          mealYoutube: meal.strYoutube,
          mealSource: meal.strSource,
          mealIngredients: this.extractIngredients(meal),
          mealTags: this.extractTags(meal),
          mealInstructions: this.extractInstructions(meal),
        };
      });
  }

  extractInstructions(meal: IMeal): string[] {
    return meal.strInstructions
      .split(/(?:\.\s|\r\n|\n)/)
      .filter((instruction: string) => !!instruction);
  }

  extractIngredients(meal: any): any {
    const ingredients = [];
    const max_ingredients = 20;
    for (let i = 1; i <= max_ingredients; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient?.trim()) {
        ingredients.push({
          ingredient: ingredient.trim(),
          measure: measure.trim() ?? '',
        });
      }
    }

    return ingredients;
  }

  extractTags(meal: any) {
    return meal.strTags?.split(',') ?? [];
  }
}
