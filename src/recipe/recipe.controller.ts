import { Body, Controller, Get, Inject, Post, forwardRef } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RecipeService } from './recipe.service';
import { Recipe } from './database/models/Recipe.entity';

// @ApiTags('recipes')
@Controller('recipe')
export class RecipeController {
    constructor(private recipeService: RecipeService ) {}


    // constructor(
    //     @Inject(forwardRef(() => RecipeService)) private recipeService: RecipeService,
    //   ) {} 

    // @Get()
    // getHello(): string {
    //   return this.recipeService.getHello();
    // }

    @Post()
    async addRecipe(@Body() recipe: Recipe): Promise<Recipe> {
      return this.recipeService.addRecipe(recipe);
    }
  
    @Get()
    async getAllRecipes(): Promise<Recipe[]> {
      return this.recipeService.getAllRecipes();
    }
  }