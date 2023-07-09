let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(Math.random() * 100 + 1);
let submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
let guessSlot = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi')
let startOver = document.querySelector('.resultParas')

let p = document.createElement('p');

let prevGuess = [];

let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);

    });
}
function validateGuess(guess) {
    if (guess < 0 || guess >100 || isNaN(guess)){
    alert('please enter a valid number');
}else{
    prevGuess.push(guess);
    if (numGuess === 11){
    displayGuess(guess);
    displayMessege(`Game Over. Random number was ${randomNumber}`);
    endGame();
    }else{
        displayGuess(guess);
        checkGuess(guess);
    }
}
}
function checkGuess(guess) {
    if (guess === randomNumber){
        displayMessege(`You guessed it right`);
        endGame();
    }else if (guess < randomNumber){
        displayMessege(`Number is too low`);
    }else if (guess > randomNumber){
        displayMessege(`Number is too high`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessege(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
      lowOrHi.innerHTML = "";
  
      playGame = true;
    });
  }


