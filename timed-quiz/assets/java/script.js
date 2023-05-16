var timerEl = document.getElementById('countdown');
var beginButtonEl = document.getElementById('beginButton');
var nextButtonEl = document.getElementById('nextButton');
var gameWins = document.getElementById('wins');
var gameLosses = document.getElementById('losses');
var scoreCount = document.getElementById('scoreCount');

function gameCounter() {
    var timeLeft = 75;
  
    var timeInterval = setInterval(function () {
      timeLeft --;
      timerEl.textContent = timeLeft
   
      if (timeLeft === 0) {
        clearInterval(timeInterval);
      }
    }, 
    1000)
  }

  function startGame () {
beginButtonEl.style('none');
}
  
  function currentScores() {
    var wins = 0;
    var losses = 0;
    localStorage.setItem('wins', wins);
    localStorage.setItem('losses', losses);

    gameWins.textContent = localStorage.getItem('wins');
    gameLosses.textContent = localStorage.getItem('losses');
  }
  
function quizQuestions() {
    var q1 = ''
    var questionsAll
}

  beginButtonEl.addEventListener('click', function() {
    startGame();
    gameCounter();
  })

  nextButtonEl.addEventListener('click', function () {

    nextQuestion();
  } 
  )
  