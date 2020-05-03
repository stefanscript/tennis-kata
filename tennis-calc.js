function score(player1Points, player2Points) {
    const score1= convert(player1Points);
    if (score1 !== undefined) {
        return score1 + "-Love";
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

function convert(points) {
    if (points === 3) {
        return scoreFor(points);
    }
    if (points === 2) {
        return scoreFor(points);
    }
    if (points === 1) {
        return scoreFor(points);
    }
}

function scoreFor(points) {
    return ["Love", "Fifteen", "Thirty", "Forty"][points];
}

module.exports = score;