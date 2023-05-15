// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { RecipeController } from './recipe/recipe.controller';
// import { RecipeService } from './recipe/recipe.service';
// import { sequelize as seq } from './recipe/database/recipe.model'
// import { Sequelize } from 'sequelize';
// import { SequelizeModule } from '@nestjs/sequelize';

// const defaultPort = '3306';

// @Module({
//   imports: [
//     SequelizeModule.forRoot({
//   database: process.env.MYSQL_DATABASE,
//   username: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   host: process.env.MYSQL_HOST,
//   port: parseInt(process.env.MYSQL_PORT || defaultPort, 10),
//   dialect: 'mysql',
//   autoLoadModels: true,
//   synchronize: true,
//     })
//   ],
//   controllers: [AppController, RecipeController],
//   providers: [AppService, RecipeService],
//   exports: [SequelizeModule]
// })
// export class AppModule {}


import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeController } from './recipe/recipe.controller';
import { RecipeService } from './recipe/recipe.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from './recipe/database/database.module';
import { recipeProviders } from './recipe/database/recipes.providers';
// import { Recipe } from './recipe/database/Recipe.entity';
import { databaseProviders } from './recipe/database/database.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, RecipeController],
  providers: [ ...recipeProviders, ...databaseProviders, AppService, RecipeService],
})
export class AppModule {}



