import './css/styles.css';
import { Sudoku, isWinner } from './sudoku.js';

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.getElementById("input").value;
  input = input.split("");
  let finalInput = input.map((num) => {
    return parseInt(num);
  });
  const sudoku = new Sudoku(finalInput);
  let result = document.createElement("p");
  result.innerText = isWinner(sudoku);
  document.getElementById("result").append(result);
});

