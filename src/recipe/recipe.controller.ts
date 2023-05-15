import { Body, Controller, Get, Post } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { Recipe } from './database/models/Recipe.entity';

@Controller('recipe')
export class RecipeController {
  constructor(private recipeService: RecipeService) {}

  @Post()
  async addRecipe(@Body() recipe: Recipe): Promise<Recipe> {
    try {
      console.log('Starting to add recipe');
      return this.recipeService.addRecipe(recipe);
    } catch (error) {
      throw new Error('Failed to add new recipe');
    }
  }

  @Get()
  async getAllRecipes(): Promise<Recipe[]> {
    try {
      console.log('Starting to get recipes');
      return this.recipeService.getAllRecipes();
    } catch (error) {
      throw new Error('Failed to get all recipes');
    }
  }
}
