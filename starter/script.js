'use strict';

// console.log(document.querySelector('.message').textContent);

// //using document.querySelector to change the content to something else
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// //reading what we changed in the console
// console.log(document.querySelector('.message').textContent);
// // using document query selector to change content in the html
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// //selcting an input field to get and change the value property
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
//handling click of a button using an event listener (something that happens on the page) - mouse click, mouse moving or key press

// we selected a button and added an event handler which is the function to show what people insert into the inout field once the button is clicked.
//the function will only be called as soon as the event happens

//defining the secret number - by calling random numbers
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//creating a variable for the score
let score = 20;

//creating variable for the highscore
let highscore = 0;

//function to refactor
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// This function controls what happens when you click the "check" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //the 1st scenario is assuming there is no input/guesss

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No Number';
    displayMessage('⛔️ No Number');
  } //now we will compare the guess to the secret number to see if it is equal to the secret number

  //when player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');

    //displaying the secret number
    document.querySelector('.number').textContent = secretNumber;

    //changing the styles when guess is correct
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //implementing highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } // this scenario is if the guess is greater than the secret number

  // when the guess is different - refactoring code for when guess is higher or lower
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High' : '📉 Too Low';

      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score = score - 1; //score--
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //when the guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High';
  //     score = score - 1; //score--
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } // this scenario is if the guess is lower than the secret number

  // //when the guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low';
  //     score = score - 1; //score--
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  //other scenarios are when the guess is equal to the secret number and when the guess is too low or too high
});
//first and foremost we must define the secret number outside of the event handler
//now we have to reduce the score by 1 if he fails his guess, if he has a wrong guess i.e if his guess is lower/higher

//this function will control what happens when you click the "again" button
document.querySelector('.again').addEventListener('click', function () {
  //reassigning
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //restoring all the initial conditions
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  //restoring the styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
