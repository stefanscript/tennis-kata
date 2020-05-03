function score(player1Points, player2Points) {
    if (isWin(player1Points, player2Points)) {
        return "Player " + (player2Points > 3 ? "2" : "1") + " Wins";
    }
    
    if (isAdvantage(player1Points, player2Points)) {
        return "Advantage Player " + (player1Points > player2Points ? "1" : "2");
    }
    
    if (isDeuce(player1Points, player2Points)) {
        return "Deuce";
    }
    
    return `${convert(player1Points)}-${convert(player2Points)}`;
}

function isWin(player1Points, player2Points) {
    return Math.max(player1Points, player2Points) > 3 && Math.abs(player1Points - player2Points) === 2;
}

function isAdvantage(player1Points, player2Points) {
    return player1Points >= 3 && player2Points >= 3 && player1Points !== player2Points;
}

function isDeuce(player1Points, player2Points) {
    return player1Points >= 3 && player2Points >= 3;
}

function convert(points) {
    return ["Love", "Fifteen", "Thirty", "Forty"][points];
}

module.exports = score;