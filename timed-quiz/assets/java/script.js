var timerEl = document.getElementById('countdown');
var beginButtonEl = document.getElementById('beginButton');
var gameWins = document.getElementById('wins');
var gameLosses = document.getElementById('losses');
var scoreCount = document.getElementById('scoreCount');
var finalScore = document.getElementById('finalScore');
var scoreBox = document.getElementById('scorebox');
var infoCard = document.getElementById('infoCard');
var quizCard = document.getElementById('quizCard');
var endQuizCard = document.getElementById('endQuizCard');
var submitButton = document.getElementById('submitScoreBtn');
var playAgainButton = document.getElementById('playAgaintBtn');
var currentScore = 0;
var timeLeft = 75;
var currentQuestioni = 0;


function scoreKeeper() {
  currentScore +=100;
  scoreCount.textContent = currentScore;
  }

function gameCounter() {
    var timeInterval = setInterval(function () {
      timeLeft --;
      timerEl.textContent = timeLeft
   
      if (timeLeft === 0) {
        clearInterval(timeInterval);
        endQuiz();
      }
    }, 
    1000)
  }

function startGame() {
  infoCard.setAttribute("style", "display: none;");
  quizCard.setAttribute("style", "display: flex;");
}

var quizQuestions = [{
  question: 'What team did Larry Bird play for?',
  answers: ['Celtics', 'Hawks', 'Knicks', 'Warriors'],
  correctAnswer: 0
},
 {
  question: 'How many players are on a basketball court at the same time?',
  answers: ['12', '8', '6', '10'],
  correctAnswer: 3
  },
   {
  question: 'What does the NBA Stand for?',
  answers: ['National Basketball Association', 'National Bread Association', 'New Basketball Association', 'Never Broke Again'],
  correctAnswer: 0
  },
  {
  question: 'How many rings does Lebron James have currently (2023)',
  answers: ['5', '3', '4', '6'],
  correctAnswer: 2
},
{
  question: 'Who is the greatest NBA Player of all time?',
  answers: ['Lebron James', 'Michael Jordan', 'Kobe Bryant', 'Kareem Abdul-Jabaar'],
  correctAnswer: 0
},
{
  question: 'How many rings do the Boston Celtics have?',
  answers: ['13', '15', '17', '16'],
  correctAnswer: 2
},
{
  question: 'Who is the logo of the NBA',
  answers: ['Lebron James', 'Jerry West', 'Kobe Bryant', 'Michael Jordan'],
  correctAnswer: 1
},
{
  question: 'What did I eat for breakfast this morning?',
  answers: ['Oatmeal', 'Eggs', 'Cereal', 'Nothing'],
  correctAnswer: 0
}]
console.log(quizQuestions[currentQuestioni].correctAnswer);

function quizBegin () {
 var questionEl = document.querySelector('.questionText');
 var choicesEl = document.querySelector('.choices');

 questionEl.textContent = '';
 choicesEl.innerHTML = '';
 questionEl.textContent = quizQuestions[currentQuestioni].question;

 quizQuestions[currentQuestioni].answers.forEach((answer, index) => {
  var answerButton = document.createElement('button');
  answerButton.className = 'answerBtn';
  answerButton.textContent = answer;

  answerButton.addEventListener('click', () => selectedAnswer(index));
  choicesEl.appendChild(answerButton);
})}

function selectedAnswer(answerIndex) {
console.log(scoreCount);
  if(answerIndex == quizQuestions[currentQuestioni].correctAnswer) {
  scoreKeeper();
} else {
  timeLeft -=10;
}

currentQuestioni ++;

if(currentQuestioni === quizQuestions.length) {
 endQuiz();
} else {
  quizBegin();
}
}

function endQuiz() {
quizCard.setAttribute('style', 'display:none');
endQuizCard.setAttribute('style', 'display:flex');
finalScore.textContent = currentScore;
}

function highScoresBoard() {
    localStorage.setItem('High Scores', highScores);

    gameWins.textContent = localStorage.getItem('wins');
    gameLosses.textContent = localStorage.getItem('losses');
  }

  

  beginButtonEl.addEventListener('click', function() {
    gameCounter();
    startGame();
    quizBegin();
  })
  