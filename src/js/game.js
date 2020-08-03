var slots = Array.from(document.getElementsByClassName("slot"));
console.log(slots);
const Player = function(name, mark) {
  return {name, mark}
}

var board = (function(slots) {

  return {
    full: function() {
      return slots.every(slot => slot.innerHTML != "");
    },
    winner: function() {
      const winningSlots = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
      let winner = "";
      winningSlots.forEach(function(cond) {
        if (cond.every(i => slots[i].innerHTML == "X")) {
          winner = "X";
        } else if (cond.every(i => slots[i].innerHTML == "O")) {
          winner = "O";
        }
      })
      return winner;
    }
  }

})(slots);

let player1 = Player('one', 'X');
let player2 = Player('two', 'O');


console.log(player1.name);
console.log(player1.mark);
console.log(player2.name);
console.log(player2.mark);
console.log(board.full());
console.log(board.winner());
