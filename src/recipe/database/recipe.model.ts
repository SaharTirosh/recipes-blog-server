import { Sequelize, DataTypes } from 'sequelize';

const defaultPort = '3306';

export const sequelize = new Sequelize({
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || defaultPort, 10),
  dialect: 'mysql',
});

// Define the Ingredient model
export const Ingredient = sequelize.define('Ingredient', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define the Step model
export const Step = sequelize.define('Step', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timer: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

// Define the Recipe model
export const RecipeModel = sequelize.define('Recipe', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


// Define the associations between models
RecipeModel.hasMany(Step);
Step.belongsTo(RecipeModel);

Step.belongsToMany(Ingredient, { through: 'StepIngredient' });
Ingredient.belongsToMany(Step, { through: 'StepIngredient' });

// Sync the models with the database
(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database and tables created!');
  } catch (error) {
    console.error('Error creating database tables:', error);
  }
})();
