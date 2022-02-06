// jQuery global vars
var start_btn_El = $('#start-btn');
var textEl = $('#starter-text');
var headerE1 = $('#header');
var questionsEl = $('#questions-div');
var resultEl = $('#results-div');

// quiz global vars
var question_bank = [
  { "string_Q" : "Which command will stop an infinite loop?/n"
            + "(a)Atl-C/n(b)Shift-C/n(c)Esc/n(d)Ctrl-C/n"
  },
  { "string_Q" : "Jordan needs to execute a section of code ten times within a program. Compare the selection structures below and select which one meets the needs identified./n"
            + "(a)If-Else/n(b)For/n(c)While/n(d)If/n"
  }, 
  { "string_Q" : "Jeff has just constructed her first for loop within the Java language.  Which of the following is not a required part of a for loop?/n"
            + "(a)Initialization/n(b)Condition/n(c)Variable/n(d)) increment/n"
  },
  { "string_Q" : "A loop that never ends is referred to as a(n)_________./n"
            + "(a)While loop/n(b)Infinite loop/n(c)Recursive loop/n(d))for loop/n"
  },
  { "string_Q" : "During program development, software requirements specify/n"
           + "(a)How the program will accomplish the task/n(b)What the task is that the program must perform/n(c)How to divide the task into subtasks/n(d)How to test the program when it is done/n"
  }
]
var answer_bank = ["(d)Ctrl-C","(b)For","(c))Variable","(b)Infinite loop","(b)What the task is that the program must perform"];

var time = 60;
var index = 0
var score = 0;
var timerInterval;
var removeResultInterval;

function answer(event) {
  removeResult();

  event.preventDefault();
  var user_Choice = $(event.target);

  resultEl.addClass("new-result");
  if (user_Choice[0].innerText === answer_bank[index]) {
    resultEl.append(
      "<h3 class='correct-answer'>Correct</h3>"
    );
    ++score;
  } else {
    resultEl.append(
      "<h3 class='wrong-answer'>Incorrect</h3>"
    )
    time -= 10;
  }

  nextQuestion();
}

function clearQuestions() {
  $('#click-to-start-div').children().remove();
  questionsEl.children().remove();
}

function nextQuestion() {
  ++index;
  
  clearQuestions();

  if (index<question_bank.length) {
    writeQuestion();
  } else {
    gameOver();
  }

  removeResultInterval = setTimeout(function() {
    removeResult();
  }, 2000);
}

function removeResult() {
  clearInterval(removeResultInterval);
  removeResultInterval = undefined;

  resultEl.removeClass("new-result");
  resultEl.children().eq(0).remove();
}

function gameOver() {
  clearInterval(timerInterval);
  clearQuestions();

  headerE1.append("<h2 class='d-flex justify-content-center'> Finished </h2>");
  $('#click-to-start-div').append("<p> Your Score Was " + score + "</p>");

  // resultEl.addClass('d-flex justify-content-between');
  resultEl.append("<p class='initial-title'>Enter Your Initials</p>");
  resultEl.append("<form><input/></form>");
  $("form").on("submit", function(event) {
    event.preventDefault();
    localStorage.setItem($(event.target).children("input").val(), score);
    headerE1.children().eq(2).html("Highscore Page");
    $('#click-to-start-div').children().eq(0).remove();
    for(var i = 0; i < localStorage.length; i++) {
      $('#List').append("<li class=\"w-100\">"+ localStorage.key(i)+": "+ localStorage.getItem(localStorage.key(i))+"</li>");
    }
    resultEl.children().remove();
    resultEl.append("<button> clear </button>");
    resultEl.on("click", "button", function() {
      localStorage.clear();
      location.reload();
    });
  });
}

function start(event) {
  headerE1.children().eq(2).remove();
  headerE1.children().eq(1).remove();
  start_btn_El.remove();
  writeQuestion();
  
  var countdown = $("#timer");
  countdown.text("Timer: " + time);
  timerInterval = setInterval (function() {
    --time;

    if (time <= 0) {
      countdown.text("Timer: 0");
      gameOver();
    } else {
      countdown.text("Timer: " + time);
    }
  }, 1000);

  questionsEl.on("click", "button", answer);
}

function writeQuestion() {
  var stringSplit = question_bank[index].string_Q.split("/n");
  console.log(stringSplit)
  $('#click-to-start-div').append(
  "<h2 class=\"d-flex justify-content-center\">" + stringSplit[0] + "</h2>")
  questionsEl.append(
    "<button>" + stringSplit[1] + "</button>",
    "<button>" + stringSplit[2] + "</button>",
    "<button>" + stringSplit[3] + "</button>",
    "<button>" + stringSplit[4] + "</button>",
  )
}

const splitLines = str => str.split("/n");
console.log('Original string:');
console.log('This\nis a\nmultiline\nstring.\n');
console.log(splitLines('This\nis a\nmultiline\nstring.\n'));

start_btn_El.on("click", start);
