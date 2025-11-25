alert("Let's Play!");

let score = {
    gamesPlayed : 0,
    yourScore : 0,
    computerScore : 0,
    ties : 0,
    conclusion : '',
    displayScore(result) {
        score.conclusion = conclude(score.yourScore, score.computerScore);
        alert(`Your choice: ${userChoice}\nComputer choice: ${cpuChoice}\nResult: ${result}\n\nGames played: ${score.gamesPlayed}\nYour score: ${score.yourScore}\nComputer score: ${score.computerScore}\nTies: ${score.ties}\n${score.conclusion}`);    
    }
};

let cpuChoice;
let userChoice;

function getCpuChoice () {
    let choice = Math.trunc((Math.random() * 3));
    if (choice === 0) return 'bat';
    else if (choice === 1) return 'ball';
    else return 'stump';
}


function getResult (user, cpu) {
    score.gamesPlayed++;
    if (user === cpu) {
        score.ties++;
        return resultMsg('Tie.'); 
    }
    return (condition(user, cpu)) ? (score.yourScore++ && resultMsg('You won!!!')) : (score.computerScore++ && resultMsg('You lost.'));
}

function resultMsg (result) {
    score.displayScore(result);
}

function condition (user, cpu) {
    return (user === 'bat' && cpu === 'ball') || (user === 'ball' && cpu === 'stump') || (user === 'stump' && cpu === 'bat');
}

function conclude (userScore, cpuScore) {
    if (userScore === cpuScore) return 'No one is winning';
    return (userScore > cpuScore) ? 'You are winning!' : 'Computer is winning.';
}


