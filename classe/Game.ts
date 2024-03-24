import { actionEnum } from "../enum/action.enum";
import { IGame } from "./IGame";
import { IPlayer } from "./IPlayer";

export class Game  implements IGame{

    constructor(public player1 : IPlayer , public player2 : IPlayer) {

    }
    run( ): string {
        return this.winner();
    }


    /**
     * @description This method is responsible for determining the winner of the game
     * @returns string
     */
    private winner() : string {
       
        const action1 = this.player1.getAction();
        const action2 = this.player2.getAction();

        if(action1 === action2) {
            return "null";
        }

        if(action1 === actionEnum.ROCK && action2 === actionEnum.SCISSORS) {
            return "player1";
        }

        if(action1 === actionEnum.ROCK && action2 === actionEnum.PAPER) {
            return "player2";
        }

        if(action1 === actionEnum.SCISSORS && action2 === actionEnum.ROCK) {
            return "player2";
        }

        if(action1 === actionEnum.SCISSORS && action2 === actionEnum.PAPER) {
            return "player1";
        }

        if(action1 === actionEnum.PAPER && action2 === actionEnum.ROCK) {
            return "player1";
        }

        if(action1 === actionEnum.PAPER && action2 === actionEnum.SCISSORS) {
            return "player2";
        }


        throw new Error("Invalid action");
        
    }
}