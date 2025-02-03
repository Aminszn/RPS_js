

let score = {
  wins: 0,
  losses: 0,
  ties: 0
};

const savedScore = JSON.parse(localStorage.getItem('score'));
  if (savedScore) {
  score = savedScore;
};

updateScoreElement();

function playGame(playerMove) {

  const compMove = pickComputerMove();

  const resultElement = document.querySelector('.js-result');

/*
  switch (playerMove){
    case 'rock': if (compMove === 'rock' ){
    result = 'Tie.';
    } else if (compMove === 'paper'){
      result = 'You lose';
    } else if (compMove === 'scissors'){
      result = 'You win.';
    };
    break;
    case 'paper': if (compMove === 'rock' ){
    result = 'You win';
    } else if (compMove === 'paper'){
      result = 'Tie.';
    } else if (compMove === 'scissors'){
      result = 'You lose.';
    };
    break;
    case 'scissors': if (compMove === 'rock' ){
      result = 'You lose';
      } else if (compMove === 'paper'){
        result = 'You win';
      } else if (compMove === 'scissors'){
        result = 'Tie.';
      };
      break;
  }
*/
  

      if (playerMove === compMove){ 
        resultElement.innerHTML = 'Tie.';
        score.ties += 1;
    } else if ((playerMove === 'rock' && compMove === 'sciccors') || (playerMove === 'paper' && compMove === 'rock') || (playerMove === 'scissors' && compMove === 'paper')){
      resultElement.innerHTML = 'You win.';
        score.wins += 1;
    } else {
      resultElement.innerHTML = 'You lose.'
      score.losses += 1;
    }

    const movesElement = document.querySelector('.js-moves');
    movesElement.innerHTML = `You chose ${playerMove} - Computer chose ${compMove}`;

updateScoreElement();

localStorage.setItem('score', JSON.stringify(score));


};

  function resetScore() {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };

    updateScoreElement();
    localStorage.removeItem('score');
  };

  function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  };

function pickComputerMove() {

  const randomNumber = Math.random();

  let computerMove;


      if (randomNumber < (1 / 3)){
      computerMove = 'rock';
      } else if (randomNumber < (2 / 3)) {
      computerMove = 'paper';
      } else {
      computerMove = 'scissors';
    }

  return computerMove;
    
};