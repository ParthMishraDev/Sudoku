import { Sudoku } from '../helpers';

test('Create an empty Sudoku board', () => {
    const sudokuClass = new Sudoku();
    const grid = sudokuClass.getBoard();
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            expect(grid[i][j]).toBe(0);
        }
    }
});

test('Create an a valid Sudoku', () => {
    let sudokuClass = new Sudoku();
    let solvedSudoku = null;
    if (sudokuClass.solve()) {
        solvedSudoku = sudokuClass.getBoard();
        console.log(solvedSudoku);
        for (let i = 0; i < solvedSudoku.length; i++) {
            for (let j = 0; j < solvedSudoku.length; j++) {
                expect(solvedSudoku[i][j]).not.toBe(0);
                // Because it's not to be any row, col or in box
                // Hence, think opposite to do validity check
                expect(sudokuClass.isValid(solvedSudoku, i, j, solvedSudoku[i][j])).not.toBeTruthy()
            }
        }
    }
});