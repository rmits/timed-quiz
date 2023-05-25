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
var highScoreCard = document.getElementById('highScoreCard');
var highScoreBtn = document.getElementById('highScoreBtn');
var clearScoreBtn = document.getElementById('clearScoresBtn');
var userName = document.getElementById('username');
var goBackBtn = document.getElementById('goBackBtn');
var scoreList = document.getElementById('scoreList');
var currentScore = 0;
var currentQuestioni = 0;
var timeLeft = 75;

//This function runs the timer
function gameCounter() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft

    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      endQuiz();
    }
  },
    1000)
}

function resetNumbers() {
  currentScore = 0;
  timeLeft = 75;
  currentQuestioni = 0;
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

function quizBegin() {
  var questionEl = document.querySelector('.questionText');
  var choicesEl = document.querySelector('.choices');
  var scoreCount = document.getElementById('scoreCount');
  infoCard.setAttribute("style", "display: none;");
  quizCard.setAttribute("style", "display: flex;");
  scoreCount.textContent = currentScore;
  finalScore.textContent = currentScore;

  //This is put in place to clear what was there in the question prior
  questionEl.textContent = '';
  choicesEl.innerHTML = '';

  questionEl.textContent = quizQuestions[currentQuestioni].question;

  quizQuestions[currentQuestioni].answers.forEach((answer, index) => {
    var answerButton = document.createElement('button');
    answerButton.className = 'answerBtn';
    answerButton.textContent = answer;

    answerButton.addEventListener('click', () => selectedAnswer(index));
    choicesEl.appendChild(answerButton);
  })
}

function selectedAnswer(answerIndex) {
  if (answerIndex == quizQuestions[currentQuestioni].correctAnswer) {
    currentScore += 100;
  } else {
    timeLeft -= 20;
  }

  //Adds one to the index, so it will move on to the next object in quizQuestions
  currentQuestioni++;

  //If there are no more questions left, it will run function endQuiz, otherwise keep running the quiz function
  if (currentQuestioni === quizQuestions.length) {
    endQuiz();
    timerEl.textContent = '';
  } else {
    quizBegin();
  }
}

//This hides the quiz card, and displays my endQuizCard
function endQuiz() {
  quizCard.setAttribute('style', 'display:none');
  endQuizCard.setAttribute('style', 'display:flex');
}

function saveHighScore(username, score) {
  const highScores = localStorage.getItem('highScores') ? JSON.parse(localStorage.getItem('highScores')) : [];
  const newHighScore = { username, score };
  highScores.push(newHighScore);
  highScores.sort((a, b) => b.score - a.score);
  localStorage.setItem('highScores', JSON.stringify(highScores));
}

function displayHighScores() {
  const highScores = localStorage.getItem('highScores') ? JSON.parse(localStorage.getItem('highScores')) : [];
  const leaderboard = document.getElementById('leaderboard');
  leaderboard.innerHTML = '';
  highScores.forEach((score, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${score.username}: ${score.score}`;
    leaderboard.appendChild(listItem);
  });
}


beginButtonEl.addEventListener('click', function (event) {
  event.preventDefault();
  resetNumbers();
  quizBegin();
  gameCounter();
})

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  endQuizCard.setAttribute('style', 'display: none');
  highScoreCard.setAttribute('style', 'display:none');
  infoCard.setAttribute('style', 'display: block');
  highScoreBtn.setAttribute('style', 'display:block');
  saveHighScore(userName.value, currentScore);
})

highScoreBtn.addEventListener('click', function () {
  endQuizCard.setAttribute('style', 'display: none');
  highScoreCard.setAttribute('style', 'display:flex');
  infoCard.setAttribute('style', 'display: none');
  highScoreBtn.setAttribute('style', 'display:none');
  displayHighScores();
})

clearScoreBtn.addEventListener('click', function () {
  localStorage.removeItem('highScores');
  leaderboard.textContent = '';
})

goBackBtn.addEventListener('click', function () {
  highScoreCard.setAttribute('style', 'display:none');
  infoCard.setAttribute('style', 'display: block');
  highScoreBtn.setAttribute('style', 'display:block');
})