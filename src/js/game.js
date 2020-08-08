const board = [
  "", "", "",
  "", "", "",
  "", "", ""
];

let players = [];
let currentPlayer;
let winner;
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
    slot.addEventListener("click",  function() {turn(slot);});
  });
};

const turn = (slot) => {
  markSlot(slot);
  if (getWinner() !== null) {
    alert(`${currentPlayer.name} won!`);
  } else if (fullSlots === 9) {
    alert("It was a tie!");
  } else {
    switchPlayers();
  };
}

const markSlot = (slot) => {
  let i = slots.indexOf(slot);
  board[i] = currentPlayer.mark;
  slot.innerHTML = board[i];
  slot.disabled = true;
  fullSlots += 1;
};

const getWinner = () => {
  const winningSlots = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  winner = null;
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
  getCurrentPlayer, switchPlayers, start, getWinner
};
