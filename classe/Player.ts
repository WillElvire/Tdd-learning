import { actionType } from "../type/action.type";
import { IAction } from "./Actions/IAction";
import { IPlayer } from "./IPlayer";

export class Player implements IPlayer {
    private action ?: actionType | string;
    play(action : IAction): string {
        this.action =  action.select();
        return this.action;
    }


    getAction(): string {
        return this.action as string;
    }
   
}