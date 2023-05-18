var timerEl = document.getElementById('countdown');
var beginButtonEl = document.getElementById('beginButton');
var gameWins = document.getElementById('wins');
var gameLosses = document.getElementById('losses');
var scoreCount = document.getElementById('scoreCount');
var infoCard = document.getElementById('infoCard');
var quizCard = document.getElementById('quizCard');
var answerBtns = document.querySelector('.answerBtns');
var answerBtn1 = document.getElementById('answerBtn1');
var answerBtn2 = document.getElementById('answerBtn2');
var answerBtn3 = document.getElementById('answerBtn3');
var answerBtn4 = document.getElementById('answerBtn4');
var questionText = document.getElementById('questionText');
var currentScore = 0;
var timeLeft = 75;
var currentQuestioni = 0;

function gameCounter() {
    var timeInterval = setInterval(function () {
      timeLeft --;
      timerEl.textContent = timeLeft
   
      if (timeLeft === 0) {
        clearInterval(timeInterval);
      }
    }, 
    1000)
  }

function startGame() {
  infoCard.setAttribute("style", "display: none;");
  quizCard.setAttribute("style", "display: flex;");
}

var allQuestions = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
  questionSix,
  questionSeven,
  questionEight,
  questionNine,
  questionTen,
]

function questionOne() {
  var q1a1 = answerBtn1;
  var q1a2 = answerBtn2;
  var q1a3 = answerBtn3;
  var q1a4 = answerBtn4;
  questionText.textContent = 'What does CSS stand for?';
  q1a1.textContent = 'Cascading Stylist Sheets';
  q1a2.textContent = 'Contrasting Style Sheets';
  q1a3.textContent = 'Cascading Style Sheets';
  q1a4.textContent = 'Cascading Style Scripts';
 
  q1a1.addEventListener('click', wrongAnswer);
  q1a2.addEventListener('click', wrongAnswer);
  q1a3.addEventListener('click', rightAnswer);
  q1a4.addEventListener('click', wrongAnswer);
}

function questionTwo() {
  var q2a1 = answerBtn1;
  var q2a2 = answerBtn2;
  var q2a3 = answerBtn3;
  var q2a4 = answerBtn4;
  questionText.textContent = 'What does HTML Stand For';
  q2a1.textContent = 'Hypertext Markup Language';
  q2a2.textContent = 'Hypertext Making Language';
  q2a3.textContent = 'Hey, Text Me Later';
  q2a4.textContent = 'Hit My Line';

  q2a1.addEventListener('click', rightAnswer);
  q2a2.addEventListener('click', wrongAnswer);
  q2a3.addEventListener('click', wrongAnswer);
  q2a4.addEventListener('click', wrongAnswer);
}

function questionThree() {
  var q3a1 = answerBtn1;
  var q3a2 = answerBtn2;
  var q3a3 = answerBtn3;
  var q3a4 = answerBtn4;
  questionText.textContent = 'What is the diameter of a basketball hoop?';
  q3a1.textContent = '16in';
  q3a2.textContent = '20in';
  q3a3.textContent = '22in';
  q3a4.textContent = '18in';

  q3a1.addEventListener('click', wrongAnswer);
  q3a2.addEventListener('click', wrongAnswer);
  q3a3.addEventListener('click', wrongAnswer);
  q3a4.addEventListener('click', rightAnswer);
}

function questionFour() {
  var q4a1 = answerBtn1;
  var q4a2 = answerBtn2;
  var q4a3 = answerBtn3;
  var q4a4 = answerBtn4;
  questionText.textContent = 'What is it called in bowling when a bowler gets 3 strikes in a row?';
  q4a1.textContent = 'Chicken';
  q4a2.textContent = 'Duck';
  q4a3.textContent = 'Turkey';
  q4a4.textContent = 'Eagle';

  q4a1.addEventListener('click', wrongAnswer);
  q4a2.addEventListener('click', wrongAnswer);
  q4a3.addEventListener('click', rightAnswer);
  q4a4.addEventListener('click', wrongAnswer);
}

function questionFive() {
  var q5a1 = answerBtn1;
  var q5a2 = answerBtn2;
  var q5a3 = answerBtn3;
  var q5a4 = answerBtn4;
  questionText.textContent = 'What does NBA Stand for?';
  q5a1.textContent = 'National Basketball Association';
  q5a2.textContent = 'National Basketball of America';
  q5a3.textContent = 'New Basketball Association';
  q5a4.textContent = 'None of the above';

  q5a1.addEventListener('click', rightAnswer);
  q5a2.addEventListener('click', wrongAnswer);
  q5a3.addEventListener('click', wrongAnswer);
  q5a4.addEventListener('click', wrongAnswer);
}

function questionSix() {
  var q6a1 = answerBtn1;
  var q6a2 = answerBtn2;
  var q6a3 = answerBtn3;
  var q6a4 = answerBtn4;
  questionText.textContent = 'What does NFL stand for?';
  q6a1.textContent = 'North American Football League';
  q6a2.textContent = 'National Football League';
  q6a3.textContent = 'New Football League';
  q6a4.textContent = 'None of the above';

  q6a1.addEventListener('click', wrongAnswer);
  q6a2.addEventListener('click', rightAnswer);
  q6a3.addEventListener('click', wrongAnswer);
  q6a4.addEventListener('click', wrongAnswer);
}

function questionSeven() {
  var q7a1 = answerBtn1;
  var q7a2 = answerBtn2;
  var q7a3 = answerBtn3;
  var q7a4 = answerBtn4;
  questionText.textContent = 'What sport is played on a diamond?';
  q7a1.textContent = 'Basketball';
  q7a2.textContent = 'Soccer';
  q7a3.textContent = 'Golf';
  q7a4.textContent = 'Baseball';

  q7a1.addEventListener('click', wrongAnswer);
  q7a2.addEventListener('click', wrongAnswer);
  q7a3.addEventListener('click', wrongAnswer);
  q7a4.addEventListener('click', rightAnswer);
}

function questionEight() {
  var q8a1 = answerBtn1;
  var q8a2 = answerBtn2;
  var q8a3 = answerBtn3;
  var q8a4 = answerBtn4;
  questionText.textContent = 'How often are the Olympics held';
  q8a1.textContent = '2 years';
  q8a2.textContent = '6 years';
  q8a3.textContent = '4 years';
  q8a4.textContent = '5 years';

  q8a1.addEventListener('click', wrongAnswer);
  q8a2.addEventListener('click', wrongAnswer);
  q8a3.addEventListener('click', rightAnswer);
  q8a4.addEventListener('click', wrongAnswer);
}

function questionNine() {
  var q9a1 = answerBtn1;
  var q9a2 = answerBtn2;
  var q9a3 = answerBtn3;
  var q9a4 = answerBtn4;
  questionText.textContent = 'How many players can a team put on the basketball floor at the same time?';
  q9a1.textContent = '2';
  q9a2.textContent = '5';
  q9a3.textContent = '6';
  q9a4.textContent = '4';

  q9a1.addEventListener('click', wrongAnswer);
  q9a2.addEventListener('click', rightAnswer);
  q9a3.addEventListener('click', wrongAnswer);
  q9a4.addEventListener('click', wrongAnswer);
}

function questionTen() {
  var q10a1 = answerBtn1;
  var q10a2 = answerBtn2;
  var q10a3 = answerBtn3;
  var q10a4 = answerBtn4;
  questionText.textContent = 'What did I eat for breakfast this morning?';
  q10a1.textContent = 'Eggs';
  q10a2.textContent = 'Cereal';
  q10a3.textContent = 'Oatmeal';
  q10a4.textContent = 'Nothing';

  q10a1.addEventListener('click', wrongAnswer);
  q10a2.addEventListener('click', wrongAnswer);
  q10a3.addEventListener('click', rightAnswer);
  q10a4.addEventListener('click', wrongAnswer);
}

function highScores() {
    localStorage.setItem('High Scores', highScores);

    gameWins.textContent = localStorage.getItem('wins');
    gameLosses.textContent = localStorage.getItem('losses');
  }

function nextQuestion() {
  currentQuestioni ++;
  allQuestions[currentQuestioni]();
}
  
function rightAnswer () {
  currentScore +=100;
  scoreCount.textContent = currentScore;
  nextQuestion();

}

function wrongAnswer () {
  timeLeft -=10;
  nextQuestion();
}
  

  beginButtonEl.addEventListener('click', function() {
    gameCounter();
    startGame();
    questionOne();
  })
  