
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Papper";
    return "Scissors";
}
function win(userChoice, computerChoise){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div_class = document.getElementById(userChoice).classList;
    userScore++;
    userScore_span.innerHTML = userScore;

    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =`${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoise)}${smallCompWord}. You win!`;
    userChoice_div_class.add('green-glow');
    setTimeout(() => {userChoice_div_class.remove('green-glow');}, 300);
}

function loose(userChoice, computerChoise){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div_class = document.getElementById(userChoice).classList;
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    
    result_p.innerHTML =`${convertToWord(userChoice)}${smallUserWord} looses to ${convertToWord(computerChoise)}${smallCompWord}. You lost!`;
    userChoice_div_class.add('red-glow');
    setTimeout(() => {userChoice_div_class.remove('red-glow');}, 300);
}

function draw(userChoice, computerChoise){    
    const userChoice_div_class = document.getElementById(userChoice).classList;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML =`${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoise)}${smallCompWord}. It is a draw!`;
    userChoice_div_class.add('yellow-glow');
    setTimeout(() => {userChoice_div_class.remove('yellow-glow');}, 300);
}

function game(userChoice){
    const computerChoise = getComputerChoice();
    switch(userChoice + computerChoise){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoise);
            break;

        case "rp":
        case "ps":
        case "sr":
            loose(userChoice, computerChoise);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoise);
            break;

    }
}
function main(){
    rock_div.addEventListener('click', () => game('r'));

    paper_div.addEventListener('click', () => game('p'));

    scissor_div.addEventListener('click', () => game('s'));
}

main();
