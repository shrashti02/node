//setting default values to score board
let userScore = 0;
let computerScore = 0;

// fetching all element from html
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const userSelect = document.querySelector('.user-choice');
const computerSelect = document.querySelector('.computer-choice');
const statusResult = document.querySelector('.status');
const resultBlock = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById("siccor");
const lizard_div = document.getElementById('lizard');
const spock_div = document.getElementById('spock');

//creating computer choices for rock papr scissor game
function getComputerChoice() {
    const choices = ['rock', 'paper', 'siccor', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
};

//creating win function it include all possible messages when user win and passing parameter as user choice and computer choice
function win(userChoice, computerChoice) {
    console.log(userChoice, computerChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    statusResult.innerHTML = "You Win";
    statusResult.style.border = 'solid 1px red';
    statusResult.style.backgroundColor = 'green';
    statusResult.style.width = '14%';
    statusResult.style.textAlign = 'center';
    statusResult.style.padding = '7px 14px';
    userSelect.innerHTML = `you choose ${userChoice}`;
    computerSelect.innerHTML = `computer choose ${computerChoice}`;
}

//creating lose function it include all possible messages when user lose and passing parameter as user choice and computer choice
function lose(userChoice, computerChoice) {
    console.log(userChoice, computerChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    statusResult.innerHTML = "You lose";
    statusResult.style.border = 'solid 1px red';
    statusResult.style.backgroundColor = 'red';
    statusResult.style.width = '14%';
    statusResult.style.textAlign = 'center';
    statusResult.style.padding = '7px 14px';
    userSelect.innerHTML = `you choose ${userChoice}`;
    computerSelect.innerHTML = `computer choose ${computerChoice}`;
    document.querySelector('status').style.border = 'solid 1px red';
}

//creating draw function it include all possible messages when user draw and passing parameter as user choice and computer choice
function draw(userChoice, computerChoice) {
    console.log(userChoice, computerChoice);
    statusResult.innerHTML = "Draw";
    statusResult.style.border = 'solid 1px red';
    statusResult.style.backgroundColor = 'yellow';
    statusResult.style.width = '14%';
    statusResult.style.textAlign = 'center';
    statusResult.style.padding = '7px 14px';
    userSelect.innerHTML = `you choose ${userChoice}`;
    computerSelect.innerHTML = `computer choose ${computerChoice}`;
};

//creating result function which will display the result dynamically
function displayResult() {
    resultBlock.style.display = 'flex';
    resultBlock.style.flexDirection = 'column';
    resultBlock.style.justifyContent = 'center'
    resultBlock.style.alignItems = 'center';
    resultBlock.style.gap = '5px';
    resultBlock.style.margin = '5% auto';
    resultBlock.style.width = '90%';

}

// creating game function which store all the logic of the game
function game(userChoice) {
    const computerChoice = getComputerChoice();
    // user choice argument is comming from event listener which is present above the function
    switch (userChoice + computerChoice) {
        //user winning logic
        case "rocksiccor":
        case "paperrock":
        case "siccorpaper":
        case "lizardspock" || "lizardpaper":
        case "spockrock" || "spocksiccor":
            displayResult();
            win(userChoice, computerChoice);
            break;

        //user losing logic
        case "rockpaper":
        case "papersiccor":
        case "siccorrock":
        case "lizardsiccor" && "lizardrock":
        case "spocklizard" || "spockpaper":
            displayResult();
            lose(userChoice, computerChoice);
            break;

        //user draw logic
        case "rockrock":
        case "paperpaper":
        case "siccorsiccor":
        case "lizardlizard":
        case "spockspock":
            displayResult();
            draw(userChoice, computerChoice);
            break;
    }
};

// main function which hold all the events and passing second argument in eventlistner is game function.
function main() {
    rock_div.addEventListener('click', () => game('rock'));

    paper_div.addEventListener('click', () => game('paper'));

    scissors_div.addEventListener('click', () => game('siccor'));

    lizard_div.addEventListener('click', () => game('lizard'));

    spock_div.addEventListener('click', () => game('spock')
    );
};
main();
