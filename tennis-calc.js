function score(player1Points, player2Points) {
    if(player1Points >= 3 && player2Points >= 3) {
        return "Deuce";
    }
    const score1 = convert(player1Points);
    const score2 = convert(player2Points);
    
    return `${score1}-${score2}`;
}

function convert(points) {
    return ["Love", "Fifteen", "Thirty", "Forty"][points];
}

module.exports = score;