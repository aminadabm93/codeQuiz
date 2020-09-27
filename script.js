//functions
// need a function to start the game. 
// once game is started, need a function to display questions and choices 
//determine if answer choices are correct 
// once questions are done, need a function to do the end-screen 

//data
// array for questions
//array for answer choices
//array for correct answer choices 

var startButton = document.querySelector("#startButton");

function startGame(){
    //we must erase the start-screen div
    //call the startQuestions function
    var insideStuff = document.querySelector("#start-screen");
    insideStuff.innerHTML="";
    console.log("Hi this should have cleared");
}

function startQuestions(){
    //we must read question from array 
}
startButton.addEventListener("click", function(){
    startGame();
});