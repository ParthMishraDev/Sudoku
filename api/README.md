# Sudoku Back End

This project was developed using node and express

## Running the server

- Run `npm install` to install all the dependencies
- After installing the dependencies, run `npm run build` or `yarn build` to start up the server locally. 
Navigate to http://localhost:8080/ to see if the API is running.

## Running unit tests

Run `npm run test` to execute the unit tests via [jest](https://github.com/facebook/jest).

## Request & Response Example

### GET /sudoku/board

Example: http://localhost.8080/sudoku/board

Response body structure [9 x 9] Grid:

    [
      [...] // 9 elements
      [...] // 9 elements
      .
      .
      .
    ]
