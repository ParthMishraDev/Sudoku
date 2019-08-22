export class Sudoku {
    board: Number[][];
    constructor() {
        this.board = Array.from({length: 9}, () => Array(9).fill(0));
    }

    isInCol = (board: Number[][], col: any, number: any) => {
        for (let i = 0; i < 9; i++)
        if (board[i][col] == number)
            return true;

        return false;
    }

    isInRow = (board: Number[][], row: any, number: any) => {
        for (let i = 0; i < 9; i++)
        if (board[row][i] == number)
            return true;

        return false;
    }

    isInBox = (board: Number[][], row: any, col: any, number: any) => {
        const r = row - row % 3;
        const c = col - col % 3;
        
        for (let i = r; i < r + 3; i++)
            for (let j = c; j < c + 3; j++)
                if (board[i][j] == number)
                    return true;
        return false;
    }

    isValid = (board: Number[][], row: any, col: any, number: any) => {
        return !this.isInRow(board, row, number)  &&  !this.isInCol(board, col, number)  &&  !this.isInBox(board, row, col, number);
    }

    solve = () => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (this.board[row][col] == 0) {
                    for (let number = 1; number <= 9; number++) {
                    number = Math.floor(Math.random() * 9) +  1;
                
                    if (this.isValid(this.board, row, col, number)) {
                            this.board[row][col] = number;
                            if (this.solve()) {
                                return true;
                            } else {
                                this.board[row][col] = 0;
                            }
                        }
                    }
                    return false;
                }
            }
        }

        return true;
    }

    getBoard(): Number[][] {
        return this.board;
    }

    setBoard(board: Number[][]): void {
        this.board = board; 
    }
}
