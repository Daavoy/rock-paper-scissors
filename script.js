
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


const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound("rock", "scissors"));
