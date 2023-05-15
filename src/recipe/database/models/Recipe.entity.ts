import {
  Table,
  Column,
  Model,
  HasMany
} from 'sequelize-typescript';
import { Step } from './Step.Entity';

@Table
export class Recipe extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true, // Set auto-increment property
  })
  id!: number;

  @Column
  name!: string;

  @HasMany(() => Step)
  steps!: Step[];
}
