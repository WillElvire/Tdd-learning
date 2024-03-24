import { actionEnum } from "../../enum/action.enum";
import { IAction } from "./IAction";

export class Paper implements IAction {
    select(): string {
        return actionEnum.PAPER;
    }
}