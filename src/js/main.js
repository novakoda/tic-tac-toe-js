import * as Game from './game.js';
import Player from './player.js';

const player1 = new Player(0, 'X');
const player2 = new Player(1, 'O');

const nameCont = document.getElementById("name-container");
const nameForm = document.getElementById("name-form");
const errorDiv = document.getElementById("error");
const startBtn = document.getElementById("startBtn");
const closeBtn = document.getElementById("closeBtn");
const resetBtn = document.getElementById("resetBtn");
const xDisplay = document.getElementById("x-name");
const oDisplay = document.getElementById("o-name");

startBtn.addEventListener("click", function() {
  let xName = document.getElementById("x-name-input").value;
  let oName = document.getElementById("o-name-input").value;
  if (xName !== "" && xName !== null) {
    player1.changeName(xName);
    xDisplay.innerHTML = xName;
  };
  if (oName !== "" && oName !== null) {
    player2.changeName(oName);
    oDisplay.innerHTML = oName;
  };
  console.log({player1, player2});
  Game.start([player1,player2]);
  nameCont.style.display = "none";
});

closeBtn.addEventListener("click", function() {
  nameCont.style.display = "none";
});

resetBtn.addEventListener("click", function() {
  document.getElementById('light-o').style.display = "none";
  Game.start([player1,player2]);
});
