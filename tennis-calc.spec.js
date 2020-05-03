const score = require("./tennis-calc");

describe("Tennis calculator", () =>  {
    it("should get a basic score", () => {
        toTennisScore(0, 0, "Love-Love");
        toTennisScore(1, 0, "Fifteen-Love");
        toTennisScore(2, 0, "Thirty-Love");
        toTennisScore(3, 0, "Forty-Love");
        toTennisScore(0, 1,"Love-Fifteen");
        toTennisScore(0, 2,"Love-Thirty");
        toTennisScore(0, 3,"Love-Forty");
        
        toTennisScore(1, 3,"Fifteen-Forty");
    });
    
    it("should get deuce", () => {
        toTennisScore(3,3, "Deuce");
        toTennisScore(4,4, "Deuce");
    });
    
    it("should get advantage", () => {
        toTennisScore(4,3, "Advantage Player 1");
        toTennisScore(7,6, "Advantage Player 1");
    
        toTennisScore(3,4, "Advantage Player 2");
        toTennisScore(6,7, "Advantage Player 2");
    });
    
    it("should get the winner", () => {
        toTennisScore(4,2, "Player 1 Wins");
        toTennisScore(5,3, "Player 1 Wins");
    
        toTennisScore(2,4, "Player 2 Wins");
        toTennisScore(3,5, "Player 2 Wins");
    });
});

function toTennisScore(player1Points, player2Points, expected) {
    expect(score(player1Points, player2Points)).toEqual(expected);
}

