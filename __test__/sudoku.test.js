import { Sudoku, isWinner } from './../src/sudoku.js';

describe('Sudoku', () => {

  test('should take in an array of numbers and create Sudoku object', () => {
    const sudoku = new Sudoku([1,2,3,4]);
    expect(sudoku.numbers).toEqual([1,2,3,4]);
  });

  test('should take in an array of numbers and create an array of row arrays of length 9', () => {
    const sudoku = new Sudoku([5,3,4,6,7,8,9,1,2,6,7,2,1,9,5,3,4,8,1,9,8,3,4,2,5,6,7,8,5,9,7,6,1,4,2,3,4,2,6,8,5,3,7,9,1,7,1,3,9,2,4,8,5,6,9,6,1,5,3,7,2,8,4,2,8,7,4,1,9,6,3,5,3,4,5,2,8,6,1,7,9]);
    expect(sudoku.rows).toEqual([[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]);
  });

  test('should take in an array of numbers and create a length 9 array of column arrays', () => {
    const sudoku = new Sudoku([5,3,4,6,7,8,9,1,2,6,7,2,1,9,5,3,4,8,1,9,8,3,4,2,5,6,7,8,5,9,7,6,1,4,2,3,4,2,6,8,5,3,7,9,1,7,1,3,9,2,4,8,5,6,9,6,1,5,3,7,2,8,4,2,8,7,4,1,9,6,3,5,3,4,5,2,8,6,1,7,9]);
    expect(sudoku.cols).toEqual([[5,6,1,8,4,7,9,2,3],[3,7,9,5,2,1,6,8,4],[4,2,8,9,6,3,1,7,5],[6,1,3,7,8,9,5,4,2],[7,9,4,6,5,2,3,1,8],[8,5,2,1,3,4,7,9,6],[9,3,5,4,7,8,2,6,1],[1,4,6,2,9,5,8,3,7],[2,8,7,3,1,6,4,5,9]]);
  });

  test('should take in an array of numbers and create an array of square arrays of length 9', () => {
    const sudoku = new Sudoku([5,3,4,6,7,8,9,1,2,6,7,2,1,9,5,3,4,8,1,9,8,3,4,2,5,6,7,8,5,9,7,6,1,4,2,3,4,2,6,8,5,3,7,9,1,7,1,3,9,2,4,8,5,6,9,6,1,5,3,7,2,8,4,2,8,7,4,1,9,6,3,5,3,4,5,2,8,6,1,7,9]);
    expect(sudoku.squares).toEqual([[5,3,4,6,7,2,1,9,8],[6,7,8,1,9,5,3,4,2],[9,1,2,3,4,8,5,6,7],[8,5,9,4,2,6,7,1,3],[7,6,1,8,5,3,9,2,4],[4,2,3,7,9,1,8,5,6],[9,6,1,2,8,7,3,4,5],[5,3,7,4,1,9,2,8,6],[2,8,4,6,3,5,1,7,9]]);
  });

  test('should take in an array of numbers and detect if it is a winning or losing board or not', () => {
    const sudokuWinner = new Sudoku([5,3,4,6,7,8,9,1,2,6,7,2,1,9,5,3,4,8,1,9,8,3,4,2,5,6,7,8,5,9,7,6,1,4,2,3,4,2,6,8,5,3,7,9,1,7,1,3,9,2,4,8,5,6,9,6,1,5,3,7,2,8,4,2,8,7,4,1,9,6,3,5,3,4,5,2,8,6,1,7,9]);
    const sudokuLoser = new Sudoku([5,3,4,6,3,8,9,1,2,6,6,6,1,9,5,3,1,7,1,9,8,3,4,2,5,6,7,8,5,9,7,6,1,4,2,3,4,2,6,8,5,3,7,9,1,7,1,3,9,2,4,8,5,6,9,6,1,5,3,7,2,8,4,2,8,7,4,1,9,6,3,5,3,4,5,2,8,6,1,7,9]);
    expect(isWinner(sudokuWinner)).toEqual(true);
    expect(isWinner(sudokuLoser)).toEqual(false);
  });
  
});