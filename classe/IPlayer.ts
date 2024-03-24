import { IAction } from "./Actions/IAction";

export interface IPlayer {
    play(action : IAction) : string;
    getAction() : string;
   
}