
var game = {score1: 0,
            score2: 0};
var turn =1;

// question bank

var questions =[
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
    question: "How many times does Sheldon knock on a door?",
    answers: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
      correctAnswer: "b"
  },
  {
    question: "Which of the actors in The Big Bang Theory previously worked together on Roseanne?",
    answers: {
      a: "Kaley Cucoco, Johnny Galecki, and Melissa Rauch",
      b: "Johnny Galecki, Sara Gilbert, and Laurie Metcalf.",
      c: "Jim Parsons, Mayim Bialik, Kunal Nayyar",
      d: "Simon Helberg, Mellisa Rauch, Kevin Sussman"
    },
      correctAnswer: "b"
  },
  {
    question: "Who wrote and recorded the show's theme song?",
    answers: {
      a: "Barenaked Ladies",
      b: "Sublime",
      c: "Weezer",
      d: "Nickelback"
    },
      correctAnswer: "a"
  },
  {
    question: "Where is Sheldon Cooper from?",
    answers: {
      a: "Dallas, TX",
      b: "Galveston, TX",
      c: "Houston, TX",
      d: "Austin, TX"
    },
      correctAnswer: "b"
  },
  {
    question: "How old was Sheldon when he earned a PhD?",
    answers: {
      a: "14",
      b: "15",
      c: "16",
      d: "17"
    },
      correctAnswer: "c"
  },
  {
    question: "To pay her bills, Penny was a waitress what resaurtant?",
    answers: {
      a: "California Pizza Kitchen",
      b: "Cheesecake Factory",
      c: "P.F. Chang's",
      d: "Outback Steakhouse"
    },
      correctAnswer: "b"
  },
  {
    question: "Which California town does the show take place?",
    answers: {
      a: "Sherman Oaks",
      b: "Hermosa Beach",
      c: "Pasadena",
      d: "Irvine"
    },
      correctAnswer: "c"
  },
  {
    question: "What is Sheldon's catch phrase?",
    answers: {
      a: "Sock it to me.",
      b: "Yada, Yada, Yada.",
      c: "Gotcha!",
      d: "Bazinga!"
    },
      correctAnswer: "d"
  },
]

var randomQuestion = Math.floor(Math.random() *questions.length);

function showQuestion() {
    var showQuestion = (questions[randomQuestion].question);
    var $showQuestion = showQuestion;
    $('#quiz').html($showQuestion);
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
$('#a').html("<button class='answerButton' data-answerid='a'>"+questions[randomQuestion].answers.a + "</button>");
$('#b').html("<button class='answerButton' data-answerid='b'>"+questions[randomQuestion].answers.b + "</button>");
$('#c').html("<button class='answerButton' data-answerid='c'>"+questions[randomQuestion].answers.c + "</button>");
$('#d').html("<button class='answerButton' data-answerid='d'>"+questions[randomQuestion].answers.d + "</button>");
  $(".answerButton").click(function() {
        console.log("You clicked answer: " + $(this).data("answerid"))
        checkAnswers($(this).data("answerid"))
  })
}
showAnswers()

function checkAnswers(answerLetter) {
    if ( answerLetter === questions[randomQuestion].correctAnswer) {
      alert("Correct answer!");

      if (turn === 1) {
        game.score1 = game.score1 + 1;
        $('#playerOne').html("Player One Score: " + game.score1);
      }

      if (turn === 2) {
        game.score2 = game.score2 + 1;
        $('#playerTwo').html("Player Two Score: " + game.score2);
      }

      removeQuestion(questions[randomQuestion]);
      // nextQuestion();
    } else {
      alert("Wrong answer.")
      removeQuestion(questions[randomQuestion]);
      // nextQuestion();
    }
    switchTurns()
    endGame()
nextQuestion()
}

function keepScore (){
  $('#playerOne').html("Player One Score: " + game.score1);
  $('#playerTwo').html("Player Two Score: " + game.score2);
}
keepScore ();

function nextQuestion() {
  console.log("next question")
  randomQuestion = Math.floor(Math.random() *questions.length);
    var $showQuestion = showQuestion;
    $('#quiz').append($showQuestion);
    $('#a').html("<button class='answerButton' data-answerid='a'>" + questions[randomQuestion].answers.a + "</button>");
    $('#b').html("<button class='answerButton' data-answerid='b'>" + questions[randomQuestion].answers.b + "</button>");
    $('#c').html("<button class='answerButton' data-answerid='c'>" + questions[randomQuestion].answers.c + "</button>");
    $('#d').html("<button class='answerButton' data-answerid='d'>" + questions[randomQuestion].answers.d + "</button>");

    $(".answerButton").click(function() {
          console.log("You clicked answer: " + $(this).data("answerid"))
          checkAnswers($(this).data("answerid"))
  })
}

function switchTurns() {
  if (turn ===1 ){
    turn = 2;
  } else {
    turn = 1
  }
}

function endGame() {
  if (game.score1 === 3 || game.score2 ===3) {
    if (game.score1 > game.score2){
      alert("Player 1 won")
      return false;
    } else {
      alert("Player 2 won")
      return false;
    }
  }
}
