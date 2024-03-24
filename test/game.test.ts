import { Game } from "../classe/Game";
import { Player } from "../classe/Player";

describe("game", () => {
    test("should return null result", () => {

        /***  DEFINE PLAYERS  */
        const wilfried = new Player();
        const computer = new Player();

       
        /*** DEFINE ACTION ** */
        const wilfriedAction = "rock";
        const computerAction = "rock";

        /*** PLAY ** */
        wilfried.play({ select: () => wilfriedAction });
        computer.play({ select: () => computerAction });
        /** START THE TOURNAMENT  */
        const game = new Game(wilfried, computer);
        /** RUN THE GAME */
        const result = game.run();

        expect(result).toEqual('null');
    });


    test("should return null result", () => {

        /***  DEFINE PLAYERS  */
        const wilfried = new Player();
        const computer = new Player();

       
        /*** DEFINE ACTION ** */
        const wilfriedAction = "rock";
        const computerAction = "scissors";

        /*** PLAY ** */
        wilfried.play({ select: () => wilfriedAction });
        computer.play({ select: () => computerAction });
        /** START THE TOURNAMENT  */
        const game = new Game(wilfried, computer);
        /** RUN THE GAME */
        const result = game.run();

        expect(result).toEqual('player1');
    });


    test("should return null result", () => {

        /***  DEFINE PLAYERS  */
        const wilfried = new Player();
        const computer = new Player();

       
        /*** DEFINE ACTION ** */
        const wilfriedAction = "rock";
        const computerAction = "paper";

        /*** PLAY ** */
        wilfried.play({ select: () => wilfriedAction });
        computer.play({ select: () => computerAction });
        /** START THE TOURNAMENT  */
        const game = new Game(wilfried, computer);
        /** RUNw THE GAME */
        const result = game.run();

        expect(result).toEqual('player2');
    });
});