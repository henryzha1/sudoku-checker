export default function Sudoku(numbers) {
  this.numbers = numbers;
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

