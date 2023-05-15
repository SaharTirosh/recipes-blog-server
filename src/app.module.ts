import { Module } from '@nestjs/common';
import { RecipeController } from './recipe/recipe.controller';
import { RecipeService } from './recipe/recipe.service';
import { DatabaseModule } from './recipe/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class AppModule {}
