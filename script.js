var start_btn_El = $('#start-btn');
var textEl = $('#starter-text');
var headerE1 = $('#header');
var resultEl = $('#results-div');


function answer(event){
  event.preventDefault();
var user_Choice = $(event.target)
if (user_Choice[0].innerText === answer_bank[index]) {
  resultEl.append(
    "<h3> Correct</h3>"
  )
}
}
function nextFunc(event) {
  console.log("Blah");
  headerE1.children().eq(2).remove();
  headerE1.children().eq(1).remove();
  start_btn_El.remove();
  writeQuestion();
  start();
  resultEl.on("click","button",answer)
}
var index = 0

function writeQuestion() {
  var stringSplit = question_bank[index].string_Q.split("/n");
  console.log(stringSplit)
  $('#click-to-start-div').append(
  "<h2 class=\"d-flex justify-content-center\">" + stringSplit[0] + "</h2>")
  resultEl.append(
    "<button>" + stringSplit[1] + "</button>",
    "<button>" + stringSplit[2] + "</button>",
    "<button>" + stringSplit[3] + "</button>",
    "<button>" + stringSplit[4] + "</button>",
  )
}
var time = 60
var x 
function start() {
  var countdown = $("#timer")
  countdown.text(time)
  x=setInterval (function(){
    time = time-1 
    countdown.text(time)
  },1000)
}

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


const splitLines = str => str.split("/n");
console.log('Original string:');
console.log('This\nis a\nmultiline\nstring.\n');
console.log(splitLines('This\nis a\nmultiline\nstring.\n'));



start_btn_El.on("click",nextFunc)