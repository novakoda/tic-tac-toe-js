import * as Game from './game.js';
import Player from './player.js';

const player1 = new Player(0, 'X');
const player2 = new Player(1, 'O');

Game.start([player1,player2]);
