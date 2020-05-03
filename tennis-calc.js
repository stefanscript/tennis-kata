function score(player1Points, player2Points) {
    const score1 = convert(player1Points);
    if (score1 !== undefined) {
        return score1 + "-Love";
    }
    
    const score2 = convert(player2Points);
    if (score2 !== undefined) {
        return "Love-" + score2;
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