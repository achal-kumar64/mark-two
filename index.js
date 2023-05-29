var readlineSync = require("readline-sync");

var sum = 0;

console.log("Hello!")
var usrname = readlineSync.question("Please enter your name ")
console.log(usrname, "lets play some simple fact quiz about countries ")
console.log(" ")

// making an array which contains both question and answers as OBJECTS  

  var questions =
[
  {
    question: "what is the national bird of India? ", 
    ans: "peacock" 
},
  {
    question: "Abraham lincoln belongs to which country? ",
    ans: "america"
  },
  {
    question: "what is the capital of Australia? ",
    ans: "canberra",
  },
  {
    question: "Currently which country has democratic regime North Korea or South Korea? ",
    ans: "south korea",
  },
  {
    question: "Name the smallest country ",
    ans: "vatican city",
  }

  ]

// function to ask the question

function play (question, answer)
  {
    var useranswer = readlineSync.question(question);
    if (useranswer === answer)
    {
      console.log("you are right")
      console.log("-------------")
      sum = sum+1;
    }
    else
    {
      console.log("WRONG")
      console.log("-------------")
  }
  }

function game (){
  for (var i=0; i<questions.length; i++)
    {
   var currentQuestion = questions[i];
  play (currentQuestion.question, currentQuestion.ans)
    
}
}

game();
console.log("Your score is ", sum)
