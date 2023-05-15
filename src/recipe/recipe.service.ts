
import { Injectable, Inject } from '@nestjs/common';
import { Recipe } from './database/models/Recipe.entity';
import { Ingredient } from './database/models/Ingredient.Entity';
import { Step } from './database/models/Step.Entity';


@Injectable()
export class RecipeService {
  constructor(
    @Inject('RECIPE_REPOSITORY')
    private recipesRepository: typeof Recipe
  ) {}



  async getAllRecipes(): Promise<Recipe[]> {
    const recipes = await this.recipesRepository.findAll<Recipe>({
      include: [
        {
          model: Step,
          include: [Ingredient],
        },
      ],
    });
  
    const serializedRecipes = recipes.map(recipe => {
      const serializedRecipe = recipe.toJSON();
  
      delete serializedRecipe.createdAt;
      delete serializedRecipe.updatedAt;
  
      return serializedRecipe;
    });
  
    return serializedRecipes;
  }




  // async addRecipe(recipeData: any): Promise<Recipe> {
  //   const { name, steps } = recipeData;
  
  //   // Create the recipe
  //   const recipe = new Recipe();
  //   recipe.name = name;
  //   await recipe.save(); // Save the recipe first to generate an ID
  
  //   // Create and associate the steps
  //   const createdSteps = await Promise.all(
  //     steps.map(async (stepData: any) => {
  //       const step = new Step();
  //       step.description = stepData.description;
  //       step.timer = stepData.timer;
  //       step.recipeId = recipe.id; // Set the foreign key value
  //       await step.save(); // Save the step first to generate an ID
  
  //       // Create and associate the ingredients
  //       const createdIngredients = await Promise.all(
  //         stepData.ingredients.map((ingredientData: any) => {
  //           const ingredient = new Ingredient();
  //           ingredient.name = ingredientData.name;
  //           ingredient.amount = ingredientData.amount;
  //           ingredient.stepId = step.id; // Set the foreign key value
  //           return ingredient.save();
  //         })
  //       );
  
  //       step.ingredients = createdIngredients;
  //       await step.save(); // Save the step after associating the ingredients
  
  //       return step;
  //     })
  //   );
  
  //   recipe.steps = createdSteps;
  //   await recipe.save(); // Save the recipe after associating the steps
  
  //   return recipe;
  // }

  async addRecipe(recipeData: any): Promise<Recipe> {
    const { name, steps } = recipeData;
  
    const recipe = await this.createRecipe(name);
    const createdSteps = await this.createSteps(steps, recipe);
    await this.createIngredients(steps, createdSteps);
  
    return recipe;
  }
  
  private async createRecipe(name: string): Promise<Recipe> {
    const recipe = new Recipe();
    recipe.name = name;
    await recipe.save();
    return recipe;
  }
  
  private async createSteps(stepsData: any[], recipe: Recipe): Promise<Step[]> {
    const createdSteps = await Promise.all(
      stepsData.map(async (stepData: any) => {
        const step = new Step();
        step.description = stepData.description;
        step.timer = stepData.timer;
        step.stepOutput = stepData.stepOutput;
        step.recipeId = recipe.id;
        await step.save();
        return step;
      })
    );
  
    recipe.steps = createdSteps;
    await recipe.save();
  
    return createdSteps;
  }
  
  private async createIngredients(stepsData: any[], steps: Step[]): Promise<void> {
    await Promise.all(
      stepsData.map(async (stepData: any, index: number) => {
        const ingredientsData = stepData.ingredients;
        const step = steps[index];
  
        const createdIngredients = await Promise.all(
          ingredientsData.map((ingredientData: any) => {
            const ingredient = new Ingredient();
            ingredient.name = ingredientData.name;
            ingredient.amount = ingredientData.amount;
            ingredient.stepId = step.id;
            return ingredient.save();
          })
        );
  
        step.ingredients = createdIngredients;
        await step.save();
      })
    );
  }
  
  
  
  
}