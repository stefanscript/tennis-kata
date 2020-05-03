const score = require("./tennis-calc");

describe("Tennis calculator", () =>  {
    it("should get a basic score", () => {
        toTennisScore(0, 0, "Love-Love");
        toTennisScore(1, 0, "Fifteen-Love");
        toTennisScore(2, 0, "Thirty-Love");
    });
});

function toTennisScore(player1Points, player2Points, expected) {
    expect(score(player1Points, player2Points)).toEqual(expected);
}

