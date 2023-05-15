// import { ApiProperty } from '@nestjs/swagger';
// import { Sequelize, DataTypes, Model } from 'sequelize';
// import { Column, Table } from 'sequelize-typescript';

// const defaultPort = '3306';

// export const sequelize = new Sequelize({
//   database: process.env.MYSQL_DATABASE,
//   username: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   host: process.env.MYSQL_HOST,
//   port: parseInt(process.env.MYSQL_PORT || defaultPort, 10),
//   dialect: 'mysql',     
// });


// class User extends Model {
//   public id!: number;
//   public name!: string;
//   public email!: string;

//   // Other model properties and methods...
// }

// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: 'User',
//     tableName: 'users',
//   }
// );

// export default User;


// // @Table
// // export class User extends Model {
// //     @Column
// //     @ApiProperty()
// //     name: string;
// //     @Column
// //     @ApiProperty()
// //     email: string;
// //     @Column
// //     @ApiProperty()
// //     password: string;
// // }

// // export const sequelize = new Sequelize({
// //   database: process.env.MYSQL_DATABASE,
// //   username: process.env.MYSQL_USER,
// //   password: process.env.MYSQL_PASSWORD,
// //   host: process.env.MYSQL_HOST,
// //   port: parseInt(process.env.MYSQL_PORT || defaultPort, 10),
// //   dialect: 'mysql',     
// // });

// // export class Ingredient extends Model {
// //   @ApiProperty()
// //   public id!: number;

// //   @ApiProperty()
// //   public name!: string;
// // }

// // Ingredient.init(
// //   {
// //     name: {
// //       type: DataTypes.STRING,
// //       allowNull: false,
// //     },
// //   },
// //   {
// //     sequelize,
// //     modelName: 'Ingredient',
// //   }
// // );

// // export class Step extends Model {
// //   @ApiProperty()
// //   public id!: number;

// //   @ApiProperty()
// //   public description!: string;

// //   @ApiProperty()
// //   public timer?: number;

// //   @ApiProperty({ type: () => [Ingredient] })
// //   public ingredients?: Ingredient[];
// // }

// // Step.init(
// //   {
// //     description: {
// //       type: DataTypes.STRING,
// //       allowNull: false,
// //     },
// //     timer: {
// //       type: DataTypes.INTEGER,
// //       allowNull: true,
// //     },
// //   },
// //   {
// //     sequelize,
// //     modelName: 'Step',
// //   }
// // );

// // export class Recipe extends Model {
// //   @ApiProperty()
// //   public id!: number;

// //   @ApiProperty()
// //   public name!: string;

// //   @ApiProperty({ type: () => [Step] })
// //   public steps?: Step[];
// // }

// // Recipe.init(
// //   {
// //     name: {
// //       type: DataTypes.STRING,
// //       allowNull: false,
// //     },
// //   },
// //   {
// //     sequelize,
// //     modelName: 'Recipe',
// //   }
// // );

// // Recipe.hasMany(Step);
// // Step.belongsTo(Recipe);

// // Step.belongsToMany(Ingredient, { through: 'StepIngredient' });
// // Ingredient.belongsToMany(Step, { through: 'StepIngredient' });

// // (async () => {
// //   try {
// //     await sequelize.sync({ force: true });
// //     console.log('Database and tables created!');
// //   } catch (error) {
// //     console.error('Error creating database tables:', error);
// //   }
// // })();
