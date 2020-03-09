let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result')
const rock_ID = document.getElementById('r');
const paper_ID = document.getElementById('p');
const scissor_ID = document.getElementById('s');

function main(){
rock_ID.addEventListener('click', function(){
    Game('r')
})

paper_ID.addEventListener('click', function(){
    Game('p')

})

scissor_ID.addEventListener('click', function(){
    Game('s')
})
} 

main();


function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    
    return choices[randomNumber];


    


}
function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore
   

    switch(user + computer) {
        case 'pr':
        result_div.innerHTML = 'Paper covers rock. You win!'
        break;

        case 'rs':
        result_div.innerHTML = 'Rock smashes scissors. You win!'
        break;

        case 'sp':
        result_div.innerHTML = 'Scissors cuts paper. You win!'
        break;

    }
    

}
function lose(user, computer){
    computerScore++;
    computerScore_span.innerHTML = computerScore;

    switch(user + computer) {
        case 'rp':
        result_div.innerHTML = 'Paper covers rock. You Lose!!!!!'
        break;

        case 'sr':
        result_div.innerHTML = 'Rock smashes scissors. You Lose!!!!!!'
        break;

        case 'ps':
        result_div.innerHTML = 'Scissors cuts paper. You LOSE!!!!!!!!!'
        break;

    }

  
    
}
function tie() {
    result_div.innerHTML = 'Draw!!!!';
    
}
function Game(userChoice) {
    const computerChoice = getComputerChoice();
    
    switch(userChoice + computerChoice) {
        case 'rs':
        case 'sp':
        case 'pr':
            win(userChoice, computerChoice)
            break;
        case 'rp':
        case 'sr':
        case 'ps':
            
            lose(userChoice, computerChoice)
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            
            tie()
            break;
        
        
    }
}

