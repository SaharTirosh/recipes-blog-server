import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { recipeProviders } from './recipes.providers';

@Module({
  providers: [...databaseProviders, ...recipeProviders],
  exports: [...databaseProviders, ...recipeProviders],
})
export class DatabaseModule {}
