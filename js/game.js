let board = [
  "", "", "",
  "", "", "",
  "", "", ""
];

let players = [];
let currentPlayer;
let winner;
let fullSlots = 0;
let slots = Array.from(document.getElementsByClassName("slot"));
let notifications = document.getElementById("notifications");
let xLight = document.getElementById('light-x');
let oLight = document.getElementById('light-o');

slots.forEach((slot) => {
  slot.addEventListener("click",  function() {turn(slot);});
});
const getCurrentPlayer = () => currentPlayer;

const switchPlayers = () => {
  currentPlayer = currentPlayer.id === 1 ? players[1] : players[0];
  return currentPlayer;
};

const start = (users) => {
  players = users;
  currentPlayer = users[0];
  xLight.style.display = "block";
  board = new Array(9);
  fullSlots = 0;

  slots.forEach((slot, i) => {
    slot.innerHTML = "";
    slot.disabled = false;
  });
};

const end = () => {
  getWinner() !== null ? notify(`${currentPlayer.name} won!`) : notify("It was a tie!", "danger");
  xLight.style.display = "none";
  oLight.style.display = "none";
  start(players);
};

const turn = (slot) => {
  markSlot(slot);
  if (currentPlayer.mark === "X") {
    xLight.style.display = "none";
    oLight.style.display = "block";
  } else {
    oLight.style.display = "none";
    xLight.style.display = "block";
  };
  if (getWinner() !== null || fullSlots === 9) {
    end();
  } else {
    switchPlayers();
  };
};

const markSlot = (slot) => {
  notifications.style.display = "none";
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

const notify = (message, type = null) => {
  notifications.innerHTML = message;
  notifications.style.display = "block";
  if (type === null) {
    notifications.className = "alert alert-primary"
  } else {
    notifications.className = `alert alert-${type}`
  }
  console.log({message, type});
}

export {
  getCurrentPlayer, switchPlayers, start, getWinner
};
