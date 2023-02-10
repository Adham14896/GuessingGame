'use strict';

// document.querySelector('.message').textContent = 'Thats correct!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.highscore').textContent = 70;
// document.querySelector('.guess').value = 73;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When There's no numbers
  if (!guess) {
    displayMessage('🚫No Number! ');

    //When guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉Correct Answer! ');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high! ' : '📉Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '  ';
});
