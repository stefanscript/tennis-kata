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
        return "Love-" + scoreFor(player2Points);
    }
    if (player2Points === 2) {
        return "Love-" + scoreFor(player2Points);
    }
    if (player2Points === 1) {
        return "Love-" + scoreFor(player2Points);
    }
    return "Love-Love";
}

function scoreFor(points) {
    return ["Love", "Fifteen", "Thirty", "Forty"][points];
}

module.exports = score;