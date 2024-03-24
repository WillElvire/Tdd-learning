import { Player } from "../classe/Player";

describe("Player", () => {
   test("shoud create player", () => {
        const player = new Player();
        //console.log(player);
        expect(player).toBeDefined();
   });

   xtest("should play", () => {
         const player = new Player();
         player.play({select : () => "rock"});
         expect(player.getAction()).toBe("rock");
   });

    test("should get action", () => {
        const player = new Player();
        player.play({select : () => "scissors"});
        expect(player.getAction()).toBe("scissors");
    });
});