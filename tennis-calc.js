function score(player1Points, player2Points) {
    if(player1Points === 3) {
        return "Forty-Love";
    }
    if(player1Points === 2) {
        return "Thirty-Love";
    }
    if(player1Points === 1) {
        return "Fifteen-Love";
    }
    
    if(player2Points === 3) {
        return "Love-Forty";
    }
    if(player2Points === 2) {
        return "Love-Thirty";
    }
    if(player2Points === 1) {
        return "Love-Fifteen";
    }
    return "Love-Love";
}

module.exports = score;