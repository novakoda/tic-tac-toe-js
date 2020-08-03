var slots = Array.from(document.getElementsByClassName("slot"));
console.log(slots);
const Player = function(name, mark) {
  return {name, mark}
}

var board = (function(slots) {


  return {
    full: function() {
    return slots.every(slot => slot.innerHTML != "");
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
