function score(player1Points, player2Points) {
    if(player1Points > 3 && player1Points - player2Points === 2) {
        return "Player 1 Wins";
    }
    if(player2Points > 3 && player2Points - player1Points === 2) {
        return "Player 2 Wins";
    }
    if(player1Points >= 3 && player2Points >= 3) {
        if (player1Points !== player2Points) {
            return "Advantage Player " +(player1Points > player2Points ? "1" : "2");
        }
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