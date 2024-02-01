import Sudoku from './../src/sudoku.js';

describe('Sudoku', () => {

  test('should take in an array of numbers and create Sudoku object', () => {
    const sudoku = new Sudoku([1,2,3,4]);
    expect(sudoku.numbers).toEqual([1,2,3,4]);
  });

  test('should take in an array of numbers and create an array of row arrays of length 9', () => {
    const sudoku = new Sudoku([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);
    sudoku.assignRows();
    expect(sudoku.rows).toEqual([[1,2,3,4,5,6,7,8,9],[10,11,12,13,14,15,16,17,18]]);
  });

  test('should take in an array of numbers and create a length 9 array of column arrays', () => {
    const sudoku = new Sudoku([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);
    sudoku.assignColumns();
    expect(sudoku.cols).toEqual([[1,10],[2,11],[3,12],[4,13],[5,14],[6,15],[7,16],[8,17],[9,18]]);
  });

  test('should take in an array of numbers and create an array of square arrays of length 9', () => {
    const sudoku = new Sudoku([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]);
    sudoku.assignRows();
    sudoku.assignSquares();
    expect(sudoku.squares).toEqual([[1,2,3,10,11,12,19,20,21],[4,5,6,13,14,15,22,23,24],[7,8,9,16,17,18,25,26,27]]);
  });
  
});