import { Sequelize } from 'sequelize-typescript';
import { Recipe } from './models/Recipe.entity';
import { Ingredient } from './models/Ingredient.Entity';
import { Step } from './models/Step.Entity';
// import { Ingredient, Recipe, Step } from './Recipe.entity';

require('dotenv').config();
const defaultPort = '3306';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT || defaultPort, 10),
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      });
      sequelize.addModels([Step, Recipe, Ingredient]);
      await sequelize.sync();
      // await sequelize.sync({ force: true });
      return sequelize;
    },
  },
];
