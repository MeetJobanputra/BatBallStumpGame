alert("Let's Play!");

let cpuChoice = 10;
let userChoice;
let score;
let scoreStr = localStorage.getItem('userScore');

if (scoreStr != null) {
    score = JSON.parse(scoreStr);
} else {
    score = {
        gamesPlayed : 0,
        yourScore : 0,
        computerScore : 0,
        ties : 0,
        conclusion : '',
    };
}


score.displayScore = function(result) {
    score.displayMove(result);
    score.showResult();
    score.displayMatches();
    score.showConclusion();
}

score.displayMove = function(result) {
    document.querySelector('#move').innerHTML = `<pre>YourChoice: ${userChoice}\nComputerChoice: ${cpuChoice}\nResult: ${result}</pre>`;
}

score.showResult = function() {
    document.querySelector('#final-score').innerHTML = `<pre>Your score: ${score.yourScore}\nComputer score: ${score.computerScore}\nTies : ${score.ties}\n</pre>`
}

score.displayMatches = function() {
    document.querySelector('#matches').innerHTML = `<pre>Games Played: ${score.gamesPlayed}</pre>`;
}

score.showConclusion = function() {
    document.querySelector('#conclusion').innerHTML = `<pre>${score.conclusion}</pre>`;
}

function getCpuChoice () {
    let choice = Math.trunc((Math.random() * 3));
    if (choice === 0) return 'bat';
    else if (choice === 1) return 'ball';
    else return 'stump';
}


function getResult (user, cpu) {
    let gameResult;
    score.gamesPlayed++;
    if (user === cpu) {
        score.ties++;
        gameResult = 'Tie.';
    } else gameResult = (condition(user, cpu)) ? (score.yourScore++ && (gameResult = 'You won!!!')) : (score.computerScore++ && (gameResult = 'You lost.'));
    score.conclusion = conclude(score.yourScore, score.computerScore);
    localStorage.setItem('userScore', JSON.stringify(score));
    return resultMsg(gameResult);
}

function resultMsg (result) {
    return score.displayScore(result);
}

function condition (user, cpu) {
    return (user === 'bat' && cpu === 'ball') || (user === 'ball' && cpu === 'stump') || (user === 'stump' && cpu === 'bat');
}

function conclude (userScore, cpuScore) {
    if (userScore === cpuScore) return 'No one is winning';
    return (userScore > cpuScore) ? 'You are winning!' : 'Computer is winning.';
}

