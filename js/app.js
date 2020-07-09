'use strict';
var correctAnswers = 0;
alert("this is a guessing game, you have to guess things about ME, dina");
//// take the user's name
var name = prompt("what is your name?");
console.log("what is your name?");
console.log("hello " + name + " !! let's play.");
alert("hello " + name + "!! let's play.");
////-----question 1-----////
function firstFifthQuestions(message, correct) {
    var answer = prompt(message).toLowerCase();
    if (answer === correct) {
        alert('you are right');
        correctAnswers++;
    }
    else {
        alert('you are wrong');
    }
}
firstFifthQuestions("Am I younger than 25?");
firstFifthQuestions("Do I like cats?");
firstFifthQuestions("Do I drink coffee?");
firstFifthQuestions('Have I ever climbed a tree?');
firstFifthQuestions('Am I shorter that 163 cm ?');
////-----question 6-----////
function sixthQuestion(){
var howManyCats = prompt("How mant cats I had in my life? you have 4 guesses");
console.log("How mant cats I had in my life? you have 4 guesses");
for (var c = 1; c <= 3; c++) {
    if (howManyCats > 6) {
        console.log("too high");
        howManyCats = prompt("too high,try again");
    } else if (howManyCats < 6) {
        console.log("too low");
        howManyCats = prompt("too low, try again");
    } else if (howManyCats == 6) {
        //compares a string with a number
        break;
    }
}
if (howManyCats != 6) {
    console.log("you're out of guesses, the correct answer is 6");
    alert("you're out of guesses, the correct answer is 6");
} else {
    correctAnswers++;
    console.log("you're correct");
    alert("you're correct");
}
}
sixthQuestion();
////-----question 7-----////
var flag = false;
var things = ["napkin", "mask", "glove", "higeen", "key", "book", "cup"];
function seventhQuestion(){
var guessThings;
console.log("can you guess one thing i always have in my car these days?");
for (var i = 5; i >= 0; i--) { //for number of guesses
    guessThings = prompt("can you guess one thing i always have in my car these days?").toLowerCase();
    for (var index = 0; index < things.length; index++) {
        //to go through the list
        if (guessThings === things[index] || guessThings === things[index] + "s") {
            flag = true;
        }
    }
    if (flag) {
        correctAnswers++;
        console.log("correct");
        alert("correct");
        break;
    } else {
        if (i === 0) {
            console.log("you have no guesses left. the things in my car are: " + things);
            alert("you have no guesses left. the things in my car are: " + things);
        } else {
            console.log("try again, you have " + i + " guesses left.");
            alert("try again, you have " + i + " guesses left.");
        }
    }
}
}
seventhQuestion();
alert("your score is " + correctAnswers + "/7");
document.write("<h3 class=\"doc-write parheading\">Important things in my car these days:</h3> <ul class=\"doc-write\">");
for (var index = 0; index < things.length; index++) {
    document.write("<li>" + things[index] + "</li>");
}
document.write("</ul>");
document.write("<p class=\"doc-write\" >Your score is " + correctAnswers + "/7 </p>");
document.write("<p class=\"doc-write\" >It was nice playing with you <b id=\"fromScript\">" + name + "</b>!! </p>");