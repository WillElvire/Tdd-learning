import { actionEnum } from "../../enum/action.enum";
import { IAction } from "./IAction";

export class Scissors implements IAction {
    select(): string {
        return actionEnum.SCISSORS;
    }
}