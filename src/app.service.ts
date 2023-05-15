import { Injectable } from '@nestjs/common';
import { Recipe } from './recipe/database/models/Recipe.entity';
import { InjectModel } from '@nestjs/sequelize/dist/common/sequelize.decorators';

@Injectable()
export class AppService {
  // constructor(
  //   @InjectModel(Recipe)
  //   private recipeModel: typeof Recipe,
  // ) {}

  getHello(): string {
    return 'Hello World!';
  }


  // async getAllRecipes(): Promise<Recipe[]> {
  //   return this.recipeModel.findAll();
  // }
}
