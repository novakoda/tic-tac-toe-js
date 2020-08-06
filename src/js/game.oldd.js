var slots = Array.from(document.getElementsByClassName("slot"));
var notificationDiv = document.getElementById("notifications");

const Player = (name, mark) => {
  return {name, mark}
}

var board = (function(slots) {
  const winner = () => {
    const winningSlots = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let winner = false;
    winningSlots.forEach(function(cond) {
      if (cond.every(i => slots[i].innerHTML == "X")) {
        winner = "X";
      } else if (cond.every(i => slots[i].innerHTML == "O")) {
        winner = "O";
      };
    });
    return winner;
  };

  const full = () => {
    return slots.every(slot => slot.innerHTML != "");
  }
  return {full, winner};
})(slots);

var game = (() => {
  var mark = (slot, player) => {
    if (slot.innerHTML == "X" || slot.innerHTML == "O") {
      console.log("bad choice");
      turn(player);
    } else {
      slot.innerHTML = player.mark;
      player.mark == "X" ? play(player2) : play(player1);
    };
  };

  const turn = (player) => {
    slots.forEach((slot, i) => {
      if (slot.onclick != undefined) {
        slot.removeEventListener("click", mark(player, slot), false);
      };
      slot.addEventListener("click",  mark(player, slot), false);
    });
  };

  const play = (player) => {
    console.log("in play");
    if (!board.full() && !board.winner()) {
      console.log(`${player.mark} turn`);
      turn(player);
    };

  };

  return {turn, play, mark};
})();



let player1 = Player('one', 'X');
let player2 = Player('two', 'O');


console.log(player1.name);
console.log(player1.mark);
console.log(player2.name);
console.log(player2.mark);
console.log(board.full());
console.log(board.winner());
