import { Game } from "./classe/Game";
import { Player } from "./classe/Player";
import { createAction, randomizeAction } from "./functions/utilities";
import { actionType } from "./type/action.type";



// select random action
const wilfriedAction = randomizeAction();
const computerAction = randomizeAction();
// create players
const wilfried = new Player();
const computer = new Player();
// play
wilfried.play(createAction(wilfriedAction as actionType));
computer.play(createAction(computerAction as actionType));
// create game
const game = new Game(wilfried,computer);
// run game
const gameResult = game.run();

console.log(`Wilfried played ${wilfriedAction}`);
console.log(`Computer played ${computerAction}`);
console.log(`The winner is ${gameResult}`);


