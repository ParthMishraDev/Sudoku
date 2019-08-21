import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { AppComponent } from './app.component';
import { SudokuService } from './services/sudoku.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        AppComponent
      ],
      providers: [SudokuService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Sudoku App'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Sudoku App');
  }));

  it('should render button with reload', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Reload');
  }));

  it('should render a sudoku board', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance
    app.board = Array.from({ length: 9}, () => Array(9).fill(0)); // Mock empty sudoku board
    fixture.detectChanges();
    let elements = fixture.debugElement.nativeElement.querySelectorAll('td');
    expect(elements.length).toBe(81);
  }));

  // it('should reload a sudoku board', async(() => {

  //   // Create an empty sudoku board
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance
  //   app.board = Array.from({ length: 9}, () => Array(9).fill(0)); // Mock empty sudoku board
  //   fixture.detectChanges();
  //   let elements = fixture.debugElement.nativeElement.querySelector('td');
  //   expect(elements.length).toBe(81);

  //   // Find the button, and click and mock random data
  //   let button = fixture.debugElement.nativeNode.querySelector('button');

  // }));
});
