function score(player1Points, player2Points) {
    const displayScore = ["Love", "Fifteen", "Thirty", "Forty"];
    
    if(player1Points === 3) {
        return displayScore[player1Points]+"-Love";
    }
    if(player1Points === 2) {
        return displayScore[player1Points]+"-Love";
    }
    if(player1Points === 1) {
        return displayScore[player1Points]+"-Love";
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