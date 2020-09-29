//functions
// need a function to start the game. 
// once game is started, need a function to display questions and choices 
//determine if answer choices are correct 
// once questions are done, need a function to do the end-screen 

//data
// array for questions
//array for answer choices
//array for correct answer choices 
var questionIndex =0;
var finalScore=0;
var highscores =[];
var secondsLeft = 75;
var startButton = document.querySelector("#startButton");
var startDiv = document.querySelector("#start-screen");
var questionsDiv = document.querySelector("#questions");
var highscoreDiv = document.querySelector("#highscores");
var highScoresList = document.querySelector("#highscores-list");
var endDiv = document.querySelector("#end-screen");

var questions = ["Commonly used data types DO NOT include:","The condition in an if/else statement is enclosed within ___.",
    "Arrays in JavaScript can be used to store ___.", "String values must be enclosed within ___ when being assigned to variables",
    "A very useful tool used during development and debugging for printing content to the debugger is:"];

var answerChoices = [["Strings","Booleans","Alerts","Numbers"],["Quotes","Curly brackets","Parentheses","Square Brackets"],
    ["Numbers and strings","Other arrays","Booleans","All of the above"],["Commas","Curly brackets","Quotes","Parentheses"],["JavaScript","Terminal/bash","for loops","console.log"]];

var key = [2,2,3,2,3];


function startQuestions(){
    //clears start screen
    if(questionIndex==0){
        startDiv.setAttribute("class","hide");
        console.log("The question index is "+questionIndex);
        questionsDiv.removeAttribute("class");
    }
    //clears previous answer choices
    else if(questionIndex>0){
        document.querySelector("#choices").innerHTML="";
    }
    //if at the last question
    if(questionIndex==questions.length){
        endScreen();
        return null;
    }
    //create question 
    var questionTitle = document.querySelector("#question-title");
    questionTitle.textContent=questions[questionIndex];
    //print answer choices
    for(var j =0; j<answerChoices[questionIndex].length;j++){
        //create list item, and add button answer choices
        var list = document.createElement("li");
        document.querySelector("#choices").appendChild(list);
        var button = document.createElement("button");
        button.textContent=answerChoices[questionIndex][j];
        button.setAttribute("data-index",j);
        list.appendChild(button);
        list.appendChild(document.createElement("br"));
    }
}

//this will evaluate answer right or wrong
function nextQuestion(answerIndex){
    //update timer if wrong
    if(answerIndex!=key[questionIndex]){
        secondsLeft-=10;
        
    }
    //insert horizontal line and whether they got the question right or wrong
    //questionsDiv.appendChild(document.createElement)
    //move onto next question
    questionIndex++;
    startQuestions();
}

function startTime(){
    var timer = document.querySelector("#timer");
    var timerInterval = setInterval(function(){
        timer.textContent="Time: "+secondsLeft;
        secondsLeft--;
    },1000);
}

function endScreen(){
    //end game, clear questions and load end screen
    finalScore=secondsLeft;
    endDiv.removeAttribute("class");
    //endDiv.style.visibility="visible";
    document.querySelector("#final-score").textContent=finalScore;
    questionsDiv.setAttribute("class","hide");
    document.querySelector("#submit").addEventListener("click",function(){
        var initials = document.querySelector("#initials").value;
        highscores.push(initials+" - "+finalScore);
        questionsDiv.style.visibility="hide";
        highScoreTable();
    });
    //update scores array
    //go to high scores screen 

}

function highScoreTable(){
    endDiv.setAttribute("class","hide");
    highscoreDiv.removeAttribute("class");
    //endDiv.setAttribute("class","hide");
    //endDiv.style.visibility="hidden";
    for(var i=0;i<highscores.length;i++){
        var entry = document.createElement("li");
        entry.textContent= highscores[i];
        highScoresList.appendChild(entry);
    }  
}



//start the quiz
startButton.addEventListener("click", startQuestions);
startTime();
questionsDiv.appendChild(document.createElement("hr"));

//this function will listen for the answer choice
questionsDiv.addEventListener("click",function(event){
    if(event.target.matches("button")){
        var button = event.target;
        nextQuestion(button.getAttribute("data-index"));
    }
});


$("#restart").on("click",function(){
    
});

$("#goToHS").on("click",function(){

});