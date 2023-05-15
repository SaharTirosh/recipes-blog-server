// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class RecipeService {
//     getHello(): string {
//         return 'Hello World!';
//       }
// }


import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Recipe } from './database/Recipe.entity';

@Injectable()
export class RecipeService {
  // constructor(
  //   @InjectModel(Recipe)
  //   private recipeModel: typeof Recipe,
  // ) {}

//   async addRecipe(recipe: Recipe): Promise<Recipe> {
//     return this.recipeModel.create(recipe);
//   }

  // async getAllRecipes(): Promise<Recipe[]> {
  //   return this.recipeModel.findAll();
  // }

      getHello(): string {
        return 'Hello World!';
      }
}
