describe("Tennis calculator", () =>  {
    it("should get a score", () => {
        const player1Points = 0;
        const player2Points = 0;
        
        const result = score(player1Points, player2Points);
        
        expect(result).toEqual("Love-Love");
    });
});

function score(player1Points, player2Points) {
    return "Love-Love";
}