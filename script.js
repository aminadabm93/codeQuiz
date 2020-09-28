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
var timer = 75;
var startButton = document.querySelector("#startButton");
var questionsDiv = document.querySelector("#questions");
var questions = ["Commonly used data types DO NOT include:","The condition in an if/else statement is enclosed within ___.",
    "Arrays in JavaScript can be used to store ___.", "String values must be enclosed withtin ___ when being assigned to variables",
    "A very useful tool used during development and debugging for printing content to the debugger is:"];
var answerChoices = [["Strings","Booleans","Alerts","Numbers"],["Quotes","Curly brackets","Parentheses","Square Brackets"],
    ["Numbers and strings","Other arrays","Booleans","All of the above"],["Commas","Curly brackets","Quotes","Parentheses"],["JavaScript","Terminal/bash","for loops","console.log"]];

    function startGame(){
    //we must erase the start-screen div
    //call the startQuestions function
    
}

function startQuestions(){
    //we must read question from array and print it to #questions
    //add list & buttons w/ choices
    //add listeners & see if they chose correct answer 
    //print question
    if(questionIndex==0){
        document.querySelector("#start-screen").innerHTML="";
        
    }
    else if(questionIndex>0){
        document.querySelector("#choices").innerHTML="";
    }
    
    var questionTitle = document.querySelector("#question-title");
    questionTitle.textContent=questions[questionIndex];
    
    //print answer choices
    for(var j =0; j<answerChoices[questionIndex].length;j++){
        console.log("The question index is " +questionIndex);
        //create list item, and add button answer choices
        var list = document.createElement("li");
        document.querySelector("#choices").appendChild(list);
        var button = document.createElement("button");
        button.textContent=answerChoices[questionIndex][j];
        button.setAttribute("data-index",j);
        list.appendChild(button);
        list.appendChild(document.createElement("br"));
        console.log("the button text is "+button.textContent);
    }

    if(questionIndex==questions.length){
        //end game screen
        questionIndex=0;
    }
    else{
        questionIndex++;
    }
}

//this will evaluate answer right or wrong
function nextQuestion(answerIndex){
    //update timer if wrong
    console.log("User selected the button index #"+answerIndex);
    //move onto next question
    startQuestions();
}


startButton.addEventListener("click", startQuestions);
//this function will listen for the answer choice

questionsDiv.addEventListener("click",function(event){
    if(event.target.matches("button")){
        var button = event.target;
        nextQuestion(button.getAttribute("data-index"));
        //clear buttons
        console.log("The tag has children: " +document.querySelector("#choices").hasChildNodes());
    }
});

