const board = new Array(9);
let players = [];
let currentPlayer;
let fullCells = 0;

const getCurrentPlayer = () => currentPlayer;

const switchPlayers = () => {
  currentPlayer = currentPlayer.id === 1 ? players[1] : players[0];
  return currentPlayer;
}

const start = (users) => {
  players = users;
  currentPlayer = users[0];
}

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
