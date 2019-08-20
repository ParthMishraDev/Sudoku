import express = require('express');
import { Sudoku } from './helpers'

const app = express();

app.get('/', function (req, res) {
  res.send('Welcome to Sudoku API');
});

app.get('/sudoku/board', function (req, res) {
  const sudoku = new Sudoku();
  if (sudoku.solve()) {
    res.json(sudoku.getBoard());
  } else {
    res.send('Woops! something went wrong. Try again')
  }
});

app.listen(3000, function () {
  console.log('Sudoku app listening on port 3000!');
});