
function computerPlay(){
    const choices = ["rock","paper","scissor"];
    return choices[Math.floor(Math.random()*3)];
};
console.log(computerPlay());

function playRound(playerSelection, computerSelection){
    let ps =playerSelection.toLowerCase();
    let cs =computerSelection.toLowerCase();
    let ans = "";
    if(whoBeatsWho(ps,cs)==null){
        ans += "Victor undecided " + ps + " and " +cs +" are the same";
    }
    else if(whoBeatsWho(ps,cs)==ps){
        ans += "You win, "+ ps + " beats "+ cs;
    }else if(whoBeatsWho(ps,cs)==cs){
        ans +="You lose, " + cs + " beats "+ ps;
    }

    return ans;
};


function whoBeatsWho(x,y){
    if(x===y){
        return null;
    }else if(x==="rock" && y === "paper"){
        return y;
    }else if(x ==="rock" && y ==="scissors"){
        return x;
    }else if(x === "paper" && y ==="rock"){
        return x;
    }else if(x === "paper" && y === "scissors"){
        return y;
    }else if(x === "scissors" && y === "rock"){
        return y;
    }else{
        return x;
    }
};


function game(){
    let playerW = 0;
    let computerW =0;
    let draws = 0;
    for(let i = 0; i<5;i++){
        let player = prompt("rock, paper, scissors?");
        let computer = computerPlay();
        console.log(playRound(player,computer));
        if(playRound(player,computer).includes("win")){
            playerW ++;
        }else if(playRound(player,computer).includes("lose")){
            computerW ++;
        }else{
            draws++;
        }
    }
    if(playerW<computerW){
        console.log("The winner is the computer with " + computerW + " wins");
    }else if(playerW>computerW){
        console.log("The winner is player with " + playerW  + " wins");
    }else{
        console.log("The game ended in a draw");
    }
    console.log("Player wins: " + playerW + " Computer wins: " + computerW + " Draws: " + draws);
}
game();