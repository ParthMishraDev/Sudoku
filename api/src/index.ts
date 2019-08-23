import express = require('express');
import cors = require('cors');

import { Sudoku } from './helpers'

const app = express();

app.use(cors());

app.get('/', function (req, res) {
  res.send('Welcome to Sudoku API');
});

app.get('/sudoku/board', function (req, res) {
  const sudoku = new Sudoku();
  let cell = null;
  // For pre-selected value
  if (req.query.row && req.query.col && req.query.value) {
    cell = {
      row: req.query.row,
      col: req.query.col,
      value: req.query.value
    }
  }

  // Set a pre-existing value if it' selected cell has something
  if (cell) {
    let board = sudoku.getBoard();
    board[cell.row][cell.col] = Number(cell.value);
    sudoku.setBoard(board);
  }

  if (sudoku.solve()) {
    res.json(sudoku.getBoard());
  } else {
    res.send('Woops! something went wrong. Try again')
  }
});


app.listen(8080, function () {
  console.log('Sudoku app listening on port 8080!');
});