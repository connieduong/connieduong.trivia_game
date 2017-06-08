var playerOne = 0;
var playerTwo = 0;

var questions = [
  {
    question: "Who is the creator of The Big Bang Theory?",
    answers: {
      a: "J.J. Abrams",
      b: "Alex Kurtman and Roberto Orci",
      c: "Chuck Lorre and Bill Prady",
      d: "Joss Whedon"
      },
      correctAnswer: "c"
    },
  {
    question: "Which university do the four main characters work at?",
    answers: {
      a: "California Institute of Technology",
      b: "Massachusetts Institute of Technology",
      c: "Stanford",
      d: "Princton"
      },
    correctAnswer: "a"
  },
  {
    question: "Which of the main characters does not have a Ph’D?",
    answers: {
      a: "Leonard Hofstadter",
      b: "Sheldon Cooper",
      c: "Rajesh Koothrappli",
      d: "Howard Wolowitz"
    },
      correctAnswer: "d"
  },
  {
    question: "question 4, answer b",
    answers: {
      a: "answer a",
      b: "answer b",
      c: "answer c",
      d: "answer d"
    },
      correctAnswer: "b"
  },
  {
    question: "question 5, answer a",
    answers: {
      a: "answer a",
      b: "answer b",
      c: "answer c",
      d: "answer d"
    },
      correctAnswer: "a"
  },
  {
    question: "question 6, answer b",
    answers: {
      a: "answer a",
      b: "answer b",
      c: "answer c",
      d: "answer d"
    },
      correctAnswer: "b"
  },
  {
    question: "question 7, answer c",
    answers: {
      a: "answer a",
      b: "answer b",
      c: "answer c",
      d: "answer d"
    },
      correctAnswer: "c"
  },
  {
    question: "question 8, answer a",
    answers: {
      a: "answer a",
      b: "answer b",
      c: "answer c",
      d: "answer d"
    },
      correctAnswer: "a"
  },
  {
    question: "question 9, answer c",
    answers: {
      a: "answer a",
      b: "answer b",
      c: "answer c",
      d: "answer d"
    },
      correctAnswer: "c"
  },
  {
    question: "question 10, answer a",
    answers: {
      a: "answer a",
      b: "answer b",
      c: "answer c",
      d: "answer d"
    },
      correctAnswer: "a"
  }
]

var randomQuestion = Math.floor(Math.random() *questions.length);


function showQuestion() {
    var showQuestion = (questions[randomQuestion].question);
    var $showQuestion = showQuestion;
    var $quiz = '#quiz';
    $(quiz).append($showQuestion);
  }
showQuestion ()

function removeQuestion(index) {
  // pass this function the index to remove
  for (var i = 0; i < questions.length; i++) {
    var question = questions[i];
    // console.log("here");
    // console.log(question.question, index.question)
    console.log(questions.length)
    if (question.question == index.question) {
      console.log("running remove", questions.length);
      questions.splice(i, 1);
    }
  }
}


function showAnswers () {
$(answerChoices).html("<button class='answerButton' data-answerid='a'>" + questions[randomQuestion].answers.a + "</button>");
$(answerChoices).append("<button class='answerButton' data-answerid='b'>" + questions[randomQuestion].answers.b + "</button>");
$(answerChoices).append("<button class='answerButton' data-answerid='c'>" + questions[randomQuestion].answers.c + "</button>");
$(answerChoices).append("<button class='answerButton' data-answerid='d'>" + questions[randomQuestion].answers.d + "</button>");
  $(".answerButton").click(function() {
        console.log("You clicked answer: " + $(this).data("answerid"))
        checkAnswers($(this).data("answerid"))
  })
}
showAnswers()

function checkAnswers(answerLetter) {
    if ( answerLetter === questions[randomQuestion].correctAnswer)
      {alert("Correct answer!")
      playerOne = playerOne + 1;
      $('#playerOne').html("Player One Score: " + playerOne);
      // console.log("before delete", randomQuestion, questions);
      //console.log("randomQuestion", randomQuestion);
      removeQuestion(questions[randomQuestion]);
      // console.log("after delete", questions);
      nextQuestion();
    } else
    {
      alert("Wrong answer.")
      removeQuestion(questions[randomQuestion]);
      nextQuestion();
    }
  }

function nextQuestion() {
  console.log("next question")
    var $quiz = '#quiz'
    var $showQuestion = showQuestion
    $(quiz).append($showQuestion);
    $('#answerChoices').html("<button class='answerButton' data-answerid='a'>" + questions[randomQuestion].answers.a + "</button>");
    $('#answerChoices').append("<button class='answerButton' data-answerid='b'>" + questions[randomQuestion].answers.b + "</button>");
    $('#answerChoices').append("<button class='answerButton' data-answerid='c'>" + questions[randomQuestion].answers.c + "</button>");
    $('#answerChoices').append("<button class='answerButton' data-answerid='d'>" + questions[randomQuestion].answers.d + "</button>");

    $(".answerButton").click(function() {
          console.log("You clicked answer: " + $(this).data("answerid"))
          checkAnswers($(this).data("answerid"))
  })
}




// event listener to load next question


// function switchTurns() {
//   var currentPlayer = playerOne;
//     if(currentPlayer == playerOne)
//     {alert("Next player's turn");
//         currentPlayer = playerTwo
//     } else {
//     currentPlayer = playerOne
//     }
//   }
