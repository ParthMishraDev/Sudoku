import { Component, OnInit } from '@angular/core';
import { SudokuService } from './services/sudoku.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SudokuService]
})
export class AppComponent implements OnInit {
  title = 'Sudoku App';
  board: Number[][];
  isReady: boolean = false;
  errorMessage: string;
  selectedInfo: any;
  isCellSelected: boolean = false;

  constructor(private sudokuService: SudokuService) {}

  ngOnInit() {
    try {
      this.getSudokuBoard();
    } catch (err) {
      this.errorMessage = 'Oops! Something went wrong, click reload button'
    }
    this.isReady = true;
  }

  getSudokuBoard() {
    this.sudokuService.getSudokuBoard(this.selectedInfo)
      .subscribe((data) => this.board = data);
  }

  onReload(): void {
    this.isReady = false;
    this.getSudokuBoard();
    this.isReady = true;
  }

  onSelectCell(i, j, cell) {
    this.isCellSelected = !this.isCellSelected;
    if (this.isCellSelected){
      this.selectedInfo = Object.assign({ row: i, col: j, value: cell});
    } else {
      this.selectedInfo = null;
    }
  }

  isSelectedCell(i , j) {
    return this.selectedInfo && this.selectedInfo.row === i && this.selectedInfo.col === j;
  }
}
