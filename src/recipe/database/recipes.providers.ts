import { Ingredient, Recipe, Step } from './Recipe.entity';

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
  }
];