export function Sudoku(numbers) {
  this.numbers = numbers;
  this.assignRowsColsAndSquares();
}

Sudoku.prototype.assignRowsColsAndSquares = function() {
  let counter = 0;

  let rowArray = [];
  let finalRow = [];

  let col = 0;
  let finalCol = [[],[],[],[],[],[],[],[],[]];

  let finalSquare = [];
  let row = 0;
  let index = 0;

  this.numbers.forEach((number) => {
    counter++;
    col = counter%9;
    if(!col) {
      col = 9;
    }

    rowArray.push(parseInt(number));
    if(counter%9 === 0) {
      finalRow.push(rowArray);
      rowArray = [];
    }

    finalCol[col-1].push(parseInt(number));

    index = Math.floor(row/3)*3 + Math.ceil(col/3) - 1;
    if(!finalSquare[index]) {
      finalSquare[index] = [];
    }
    finalSquare[index].push(parseInt(number));

    if(counter%9 === 0) {
      row++;
    }
  })
  this.rows = finalRow;
  this.cols = finalCol;
  this.squares = finalSquare;
};


export function isWinner(sudoku) {
  let winner = true;
  const check = [1,2,3,4,5,6,7,8,9];

  for(let i = 0; i < 9; i++) {
    sudoku.rows[i].sort();
    sudoku.cols[i].sort();
    sudoku.squares[i].sort();
    for(let j = 0; j < 9; j++) {
      if(parseInt(sudoku.rows[i][j]) === parseInt(sudoku.cols[i][j]) && parseInt(sudoku.rows[i][j]) === parseInt(sudoku.squares[i][j]) && parseInt(sudoku.rows[i][j]) === parseInt(check[j])) {
        continue;
      } else {
        winner = false;
        break;
      }
    }
    if(!winner) {
      break;
    }
  }
  return winner;
}
