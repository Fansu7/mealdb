export interface IMappedMealDetail {
  mealName: string;
  mealArea: string;
  mealImg: string;
  mealCategory: string;
  mealId: string;
  mealYoutube: string;
  mealSource: string;
  mealIngredients: [{ ingredient: string; measure: string }];
  mealTags: string[];
  mealInstructions: string[];
}
