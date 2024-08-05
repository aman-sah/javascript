# Project related toDOM

## project link [click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript

const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body") 

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)

    /*Using if*/
    if(e.target.id==='grey'){
      // body.style.backgroundColor='grey'
    }
    if(e.target.id==='white'){
      // body.style.backgroundColor='grey'
    }


     /*Using Switch*/
    const colorId=e.target.id;
    switch(colorId){
      case "grey":
        body.style.backgroundColor='grey'
        break;
      case "white":
        body.style.backgroundColor='white'
        break;
      case "blue":
        body.style.backgroundColor='blue'
        break;
      case "yellow":
        body.style.backgroundColor='yellow'
        break; 
      default:
        body.style.backgroundColor='white'       
    }
  });
});

````


## project 2
```javascript
const form=document.querySelector('form');
/*this use case will give you empty value */
// const h=parseInt(document.querySelector('#height').value);

form.addEventListener('submit',function(e){
    e.preventDefault();
    const h=parseInt(document.querySelector('#height').value);
    const w=parseInt(document.querySelector('#weight').value);
    const r=document.querySelector('#results');

    if(h==='' || h<0 || isNaN(h)){
      r.innerHTML=`Please enter a valid height ${h}`;
    }else if(w==='' || w<0 || isNaN(w)){
      r.innerHTML=`Please enter a valid weight ${w}`;
    }
    else{
      const bmi=(w/((h*h)/10000)).toFixed(2);
      if(bmi<18.6){
        r.innerHTML=`<span>${bmi}<span>  <span>you are in Under Weight</span>`
      }else if(bmi>=18.6 && bmi<=24.9){
        r.innerHTML=`<span>${bmi}<span>  <span>you are in Normal Range</span>`
      }
      else{
        r.innerHTML=`<span>${bmi}<span>  <span>you are in Overweight</span>`
      }
      
    }
});

```

## solution 3

```javascript
// const clock=document.querySelector("#clock")
const clock =document.getElementById("clock")
setInterval(function(){
  const time=new Date();
  clock.innerHTML=`${time.toLocaleTimeString()}`
},1000)
```


## solution 4
```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
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

    playGame = true;
  });
}


```
