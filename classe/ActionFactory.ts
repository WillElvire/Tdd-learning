import { actionEnum } from "../enum/action.enum";
import { actionType } from "../type/action.type";
import { IAction } from "./Actions/IAction";
import { Paper } from "./Actions/Paper";
import { Rock } from "./Actions/Rock";
import { Scissors } from "./Actions/Scissor";

export class ActionFactory {
    
    /**
     * @description Create an action
     * @param type 
     * @returns 
     */
    public static create(type : actionType) : IAction {
        switch(type) {
            case actionEnum.SCISSORS:
                return new Scissors();
            case actionEnum.ROCK:
                return new Rock();
            case actionEnum.PAPER:
                return new Paper();
            default:
                throw new Error("Action not allowed");
            
        }
    }
}