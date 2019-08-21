import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { environment } from '../../environments/environment';

@Injectable()
export class SudokuService {
  constructor(private http: HttpClient) { }

  getSudokuBoard(selectedCellInfo?: any): Observable<Number[][]> {
    if (selectedCellInfo) {
      return this.http.get<Number[][]>(`/sudoku/board?row=${selectedCellInfo.row}&col=${selectedCellInfo.col}&value=${selectedCellInfo.value}`)
    }
    return this.http.get<Number[][]>('/sudoku/board')
  }
}
