function score(player1Points, player2Points) {
    if (player1Points === 3) {
        return scoreFor(player1Points) + "-Love";
    }
    if (player1Points === 2) {
        return scoreFor(player1Points) + "-Love";
    }
    if (player1Points === 1) {
        return scoreFor(player1Points) + "-Love";
    }
    
    if (player2Points === 3) {
        return "Love-Forty";
    }
    if (player2Points === 2) {
        return "Love-Thirty";
    }
    if (player2Points === 1) {
        return "Love-Fifteen";
    }
    return "Love-Love";
}

function scoreFor(points) {
    const displayScore = ["Love", "Fifteen", "Thirty", "Forty"];
    return displayScore[points];
}

module.exports = score;