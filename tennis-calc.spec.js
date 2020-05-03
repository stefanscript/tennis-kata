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
    });
});

function toTennisScore(player1Points, player2Points, expected) {
    expect(score(player1Points, player2Points)).toEqual(expected);
}

