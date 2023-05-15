import { Ingredient } from './models/Ingredient.Entity';
import { Recipe } from './models/Recipe.entity';
import { Step } from './models/Step.Entity';

export const recipeProviders = [
  {
    provide: 'RECIPE_REPOSITORY',
    useValue: Recipe,
  },
  {
    provide: 'STEP_REPOSITORY',
    useValue: Step,
  },
  {
    provide: 'INGREDIENT_REPOSITORY',
    useValue: Ingredient,
  },
];
