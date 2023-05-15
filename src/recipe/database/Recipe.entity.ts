// import { Table, Column, Model } from 'sequelize-typescript';

// @Table
// export class Recipe extends Model {
//   @Column({ primaryKey: true })
//   id!: string

//   @Column
//   name: string;

// }

// @Table
// export class Ingridient extends Model {
//   @Column
//   name: string;

//   @Column
//   amount: number;

// }
// @Table
// export class Step extends Model {
//   @Column
//   description: string;

//   // @Column
//   // stepOutput: Ingridient;

//   // @Column
//   // ingridients: Ingridient [];

//   @Column
//   timer: number;

// }

// Recipe.hasMany(Step);
// Step.hasMany(Ingridient);



import { Table, Column, Model, ForeignKey, HasMany } from 'sequelize-typescript';

@Table
export class Recipe extends Model {
  @Column({ primaryKey: true })
  id!: number;

  @Column
  name!: string;

  @HasMany(() => Step)
  steps!: Step[];
}

@Table
export class Ingredient extends Model {
  @Column
  name!: string;

  @Column
  amount!: number;

  @ForeignKey(() => Step)
  @Column
  stepId!: number;
}

@Table
export class Step extends Model {
  @Column
  description!: string;

  @Column
  timer!: number;

  @ForeignKey(() => Recipe)
  @Column
  recipeId!: number;

  @HasMany(() => Ingredient)
  ingredients!: Ingredient[];
}
