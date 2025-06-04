let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();
const r=document.querySelector('#r');
r.addEventListener('click',() =>
  playGame('rock'));
document.querySelector('.paper').addEventListener('click',function()
{
  playGame('paper');
})
document.querySelector('.scissors').addEventListener('click',() =>
{
  playGame('scissors');
})
/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
<img src="${playerMove}-emoji.png" class="move-icon">
<img src="${computerMove}-emoji.png" class="move-icon">
Computer`;
}
document.querySelector('.reset').addEventListener('click',() =>
{
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScoreElement();
})
document.querySelector('.auto').addEventListener('click',() =>
{
  setInterval(function ()
  {
    let playerMove=pickComputerMove();
    playGame(playerMove)
  },2000);
})

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
function pickUserMove() {
  const randomNumber = Math.random();

  let ap = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    ap = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    ap = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    ap = 'scissors';
  }

  return ap;
}

/*function autoplay()
{
   
  const computerMove = pickComputerMove();
  const ap = pickUserMove();

  let result = '';

  if (ap === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (ap === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (ap === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
<img src="${ap}-emoji.png" class="move-icon">
<img src="${computerMove}-emoji.png" class="move-icon">
Computer`;

}*/