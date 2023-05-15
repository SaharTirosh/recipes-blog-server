import { Sequelize } from 'sequelize-typescript';
import { Ingredient, Recipe, Step } from './Recipe.entity';

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
      sequelize.addModels([Recipe, Step, Ingredient]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
