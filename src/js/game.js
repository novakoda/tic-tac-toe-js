const board = [
  "X", "X", "X",
  "", "", "",
  "", "", ""
];

let players = [];
let currentPlayer;
let fullSlots = 0;
let slots = Array.from(document.getElementsByClassName("slot"));

const getCurrentPlayer = () => currentPlayer;

const switchPlayers = () => {
  currentPlayer = currentPlayer.id === 1 ? players[1] : players[0];
  return currentPlayer;
};

const start = (users) => {
  players = users;
  currentPlayer = users[0];

  slots.forEach((slot, i) => {
    slot.disabled = false;
    slot.addEventListener("click",  function() {markSlot(slot)});
  });
};

const turn = () => {
  if (winner()) {

  } else {
    switchPlayers();
  }
};

const markSlot = (slot) => {
  let i = slots.indexOf(slot);
  board[i] = currentPlayer.mark;
  slot.innerHTML = board[i];
  console.log({slot, board});
  slot.disabled = true;
  fullSlots += 1;
  turn();
};

const winner = () => {
  const winningSlots = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  let winner = false;
  winningSlots.forEach(function(combi) {
    if (combi.every(i => board[i] === "X")) {
      winner = 0;
    } else if (combi.every(i => board[i] === "O")) {
      winner = 1;
    };
  });
  return winner;
};

export {
  getCurrentPlayer, switchPlayers, start, winner
};
