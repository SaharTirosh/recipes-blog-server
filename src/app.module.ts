import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeController } from './recipe/recipe.controller';
import { RecipeService } from './recipe/recipe.service';
import { sequelize as seq } from './recipe/database/recipe.model'
import { Sequelize } from 'sequelize';
@Module({
  imports: [],
  controllers: [AppController, RecipeController],
  providers: [AppService, RecipeService],
})
export class AppModule {}
