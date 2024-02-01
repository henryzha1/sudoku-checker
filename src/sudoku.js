export function Sudoku(numbers) {
  this.numbers = numbers;
  this.assignRows();
  this.assignColumns();
  this.assignSquares();
}

Sudoku.prototype.assignRows = function() {
  let counter = 0;
  let row = [];
  let final = [];
  this.numbers.forEach((number) => {
    counter++;
    row.push(parseInt(number));
    if(counter%9 === 0) {
      final.push(row);
      row = [];
    }
  })
  this.rows = final;
};

Sudoku.prototype.assignColumns = function() {
  let counter = 0;
  let final = [[],[],[],[],[],[],[],[],[]];
  let col = 0;
  this.numbers.forEach((number) => {
    counter++;
    col = counter%9;
    if(!col) {
      col = 9;
    }
    final[col-1].push(parseInt(number));
  })
  this.cols = final;
};

Sudoku.prototype.assignSquares = function() {
  let counter = 0;
  let final = [];
  let row = 0;
  let col = 0;
  let index = 0;
  this.numbers.forEach((number) => {
    counter++;
    col = counter%9;
    if(!col) {
      col = 9;
    }
    index = Math.floor(row/3)*3 + Math.ceil(col/3) - 1;
    if(!final[index]) {
      final[index] = [];
    }
    final[index].push(parseInt(number));

    if(counter%9 === 0) {
      row++;
    }
  })
  this.squares = final;
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
