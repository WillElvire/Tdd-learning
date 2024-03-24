import { ActionFactory } from "../classe/ActionFactory";
import { actionEnum } from "../enum/action.enum";
import { actionType } from "../type/action.type";

export const actionAllowed = [actionEnum.ROCK, actionEnum.PAPER, actionEnum.SCISSORS];

export function randomizeAction() {
    // actions allowed
    return actionAllowed[Math.floor(Math.random() * actionAllowed.length)];
}

export  function createAction(action : actionType) {
    return ActionFactory.create(action);
}