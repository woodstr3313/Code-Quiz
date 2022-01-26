var start_btn_El = $('#start-btn');
var textEl = $('#starter-text');
var headerE1 = $('#header');
var resultEl = $('#results-div');



function nextFunc(event) {
  console.log("Blah");
  index++;
  headerE1.children().eq(1).remove();
  headerE1.children().eq(2).remove();
  start_btn_El.remove();
  writeQuestion();
}
var index = 0

function writeQuestion(event) {
  event 
}

var question_bank = [
  { string_Q1 : "Which command will stop an infinite loop?/n"
            + "(a)Atl-C/n(b)Shift-C/n(c)Esc/n(d)Ctrl-C/n"
  },
  { string_Q2 : "Jordan needs to execute a section of code ten times within a program. Compare the selection structures below and select which one meets the needs identified./n"
            + "(a)If-Else/n(b)For/n(c)While/n(d)If/n"
  }, 
  { string_Q3 : "Jeff has just constructed her first for loop within the Java language.  Which of the following is not a required part of a for loop?/n"
            + "(a)Initialization/n(b)Condition/n(c)Variable/n(d)) increment/n"
  },
  { string_Q4 : "A loop that never ends is referred to as a(n)_________./n"
            + "(a)While loop/n(b)Infinite loop/n(c)Recursive loop/n(d))for loop/n"
  },
  { string_Q5 : "During program development, software requirements specify/n"
           + "(a)How the program will accomplish the task/n(b)What the task is that the program must perform/n(c)How to divide the task into subtasks/n(d)How to test the program when it is done/n"
  }
]
//#Source https://bit.ly/2neWfJ2 
const splitLines = str => str.split(/\r?\n/);
console.log('Original string:');
console.log('This\nis a\nmultiline\nstring.\n');
console.log(splitLines('This\nis a\nmultiline\nstring.\n'));



start_btn_El.on("click",nextFunc)