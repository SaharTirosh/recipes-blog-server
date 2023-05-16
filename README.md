# Recipes Blog Server

This server provides a REST API for managing recipes. It can be used to:

* Get all recipes
* Add new recipes

The API is documented using Swagger, which can be accessed at `http://localhost:8080/api`

## Getting Started

To get started, clone the repository and install the dependencies:

```
git clone https://github.com/[your-username]/recipes-blog-server.git
cd recipes-blog-server
npm install
```

Then, start the server:

```
npm run start
```

The server will be listening on port 8080. You can access the API at `http://localhost:8080/api`.

## Database

To use the server, you will need to have a database running. You can use the following command to start a MySQL database:

```
docker run --name recipes-mysql -p 3306:3306 -e MYSQL_DATABASE=recipes -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:8
```

Once the database is running, you can configure the server to use it by setting the following environment variables:

```
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=my-secret-pw
DB_DATABASE=recipes
```

You can then start the server as usual:

```
npm run start
```

The server will now be connected to the database and you can use it to manage recipes.

## Endpoints

The following endpoints are available:

* `GET /recipe`
  * Returns a list of all recipes.
* `POST /recipe`
  * Adds a new recipe.

The request body for the `POST` endpoint is a JSON object with the following properties:

* `name` (string): The name of the recipe.
* `ingredients` (array): An array of strings, each representing an ingredient.
* `steps` (array): An array of strings, each representing a step in the recipe.

### Example Recipe

This is an example of a JSON object that can be used to create a new recipe.

```json
{
  "name": "Recipe Name",
  "steps": [
    {
      "description": "Step 1 description",
      "stepOutput": "Step 1 output",
      "timer": 10,
      "ingredients": [
        {
          "name": "Ingredient 1",
          "amount": 1
        },
        {
          "name": "Ingredient 2",
          "amount": 2
        }
      ]
    },
    {
      "description": "Step 2 description",
      "recipeOutput": "Step 2 output",
      "timer": 15,
      "ingredients": [
        {
          "name": "Ingredient 3",
          "amount": 3
        },
        {
          "name": "Ingredient 4",
          "amount": 4
        }
      ]
    }
  ]
}
```

## Troubleshooting

If you are having trouble getting the server started, please check the following:

* Make sure that you have installed all of the dependencies.
* Make sure that you are running the server on the correct port.
* Make sure that you are using the correct endpoints.

If you are still having trouble, please open an issue on the GitHub repository.









