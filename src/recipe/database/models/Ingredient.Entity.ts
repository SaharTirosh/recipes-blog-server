import { Table, Column, Model, ForeignKey, BelongsTo, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import { Step } from './Step.Entity';


@Table
export class Ingredient extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  name!: string;

  @Column
  amount!: number;

  @ForeignKey(() => Step)
  @Column
  stepId!: number;

  @BelongsTo(() => Step)
  step!: Step;
}
