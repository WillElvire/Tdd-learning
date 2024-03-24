import { actionEnum } from "../../enum/action.enum";
import { IAction } from "./IAction";

export class Rock implements IAction {
    select(): string {
        return actionEnum.ROCK;
    }
}