export interface IMappedMeals {
  meals: IMappedMeal[];
}

export interface IMappedMeal {
  mealName?: string;
  mealArea: string;
  mealImg: string;
  mealCategory: string;
  mealId: string;
}
