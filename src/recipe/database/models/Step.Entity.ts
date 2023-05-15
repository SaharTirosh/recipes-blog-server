import { Table, Column, Model, HasMany, ForeignKey, BelongsTo, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import { Ingredient } from './Ingredient.Entity';
import { Recipe } from './Recipe.entity';

@Table
export class Step extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  description!: string;

  @Column
  timer!: number;

  @ForeignKey(() => Recipe)
  @Column
  recipeId!: number;

  @BelongsTo(() => Recipe)
  recipe!: Recipe;

  @HasMany(() => Ingredient)
  ingredients!: Ingredient[];
}
