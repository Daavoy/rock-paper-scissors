
function computerPlay(){
    const choices = ["rock","paper","scissor"];
    return choices[Math.floor(Math.random()*3)];
};
console.log(computerPlay());