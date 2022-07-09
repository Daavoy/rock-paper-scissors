
function computerPlay() {
    const choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * 3)];
};


function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();
    let ans = "";
    if (whoBeatsWho(ps, cs) == null) {
        ans += "Victor undecided " + ps + " and " + cs + " are the same";
    }
    else if (whoBeatsWho(ps, cs) == ps) {
        ans += "You win, " + ps + " beats " + cs;
    } else if (whoBeatsWho(ps, cs) == cs) {
        ans += "You lose, " + cs + " beats " + ps;
    }

    return ans;
};


function whoBeatsWho(x, y) {
    if (x === y) {
        return null;
    } else if (x === "rock" && y === "paper") {
        return y;
    } else if (x === "rock" && y === "scissors") {
        return x;
    } else if (x === "paper" && y === "rock") {
        return x;
    } else if (x === "paper" && y === "scissors") {
        return y;
    } else if (x === "scissors" && y === "rock") {
        return y;
    } else {
        return x;
    }
};
const display = document.querySelector('div');
const content = document.createElement('div');
const contentWinner = document.createElement('div');
content.classList.add('content');
contentWinner.classList.add('contentWinner');

const btn = document.querySelectorAll('button');
btn.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = playRound(button.id, computerPlay());
    });
    var playerW = 0;
    var computerW = 0;
    var draws = 0;
    var arr = [];
    button.addEventListener('click', () => {
        arr = gameCount(button.id, computerPlay());
        playerW += arr[0];
        computerW += arr[1];
        draws += arr[2];
        let winner = "";
        if (playerW == 5 || computerW == 5) {
            if (playerW > computerW) {
                winner += "The winner is player with: " + playerW + " wins";
            } else if(computerW> playerW){
                winner += "The winner is the computer with: " + computerW + " wins";
            }
            playerW = 0, computerW =0, draws = 0;
        }
        content.textContent = "Wins: " + playerW + " Loss: " + computerW + " Draws: " + draws;
        contentWinner.textContent = winner;
        content.appendChild(contentWinner);
        display.appendChild(content);
    });
});

function gameCount(player, computer) {
    const arr = [];
    let playerW = 0;
    let computerW = 0;
    let draws = 0;
    if (playRound(player, computer).includes("win")) {
        playerW++;
    } else if (playRound(player, computer).includes("lose")) {
        computerW++;
    } else {
        draws++;
    }
    arr[0] = playerW;
    arr[1] = computerW;
    arr[2] = draws;
    return arr;
}



function game() {
    let playerW = 0;
    let computerW = 0;
    let draws = 0;
    for (let i = 0; i < 5; i++) {
        let player = prompt("rock, paper, scissors?");
        let computer = computerPlay();
        console.log(playRound(player, computer));
        if (playRound(player, computer).includes("win")) {
            playerW++;
        } else if (playRound(player, computer).includes("lose")) {
            computerW++;
        } else {
            draws++;
        }
    }
    if (playerW < computerW) {
        console.log("The winner is the computer with " + computerW + " wins");
    } else if (playerW > computerW) {
        console.log("The winner is player with " + playerW + " wins");
    } else {
        console.log("The game ended in a draw");
    }
    console.log("Player wins: " + playerW + " Computer wins: " + computerW + " Draws: " + draws);
}
//game();


