const score = require("./tennis-calc");

describe("Tennis calculator", () =>  {
    it("should get a score", () => {
        const player1Points = 0;
        const player2Points = 0;
        
        const result = score(player1Points, player2Points);
        
        expect(result).toEqual("Love-Love");
    });
    
    it("should return fifteen love when one player scores", () => {
        const player1Points = 1;
        const player2Points = 0;
        
        const result = score(player1Points, player2Points);
        
        expect(result).toEqual("Fifteen-Love");
    });
});

