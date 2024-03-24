
import { ActionFactory } from "../classe/ActionFactory";
import { actionEnum } from "../enum/action.enum";
import { actionAllowed, randomizeAction } from "../functions/utilities";

describe("action", () => {

    test("choose action", () => {
        const authorizedActions = actionAllowed;
        const actionChoosed = randomizeAction();
        expect(authorizedActions).toContain(actionChoosed);
    });

    test("create action", () => {
        const actionChoosed = randomizeAction();
        const action = ActionFactory.create(actionChoosed as actionEnum.ROCK | actionEnum.PAPER | actionEnum.SCISSORS);
        expect(action).toBeDefined();
    });
});

