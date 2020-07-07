'use strict';

var correctAnswers = 0;
alert("this is a guessing game, you have to guess things about ME, dina");

//// take the user's name
var name = prompt("what is your name?");
console.log("what is your name?");
console.log("hello " + name + " !! let's play.");
alert("hello " + name + "!! let's play.");


////-----question 1-----////
var age = prompt("am I older than 25 years old?");
console.log("am I older than 25 years old?");

if (age.toLowerCase() == "no" || age.toLowerCase() == "n") {
    correctAnswers++;
    console.log("you're right, I am 24");
    alert("you're right, I am 24");
} else {
    console.log("Nope, I am 24");
    alert("Nope, I am 24");

}

////-----question 2-----////
var cat = prompt("do I like cats?");
console.log("do I like cats?");

if (cat.toLowerCase() === "yes" || cat.toLowerCase() === "y") {
    correctAnswers++;
    console.log("correct");
    alert("correct");
} else {
    console.log("wrong, i do like cats");
    alert("wrong, I LOVE cats!!");

}

////-----question 3-----////
var coffee = prompt("do I drink coffee");
console.log("do I drink coffee");

if (coffee.toLowerCase() === "no" || coffee.toLowerCase() === "n") {
    correctAnswers++;
    console.log("correct");
    alert("correct");
} else {
    console.log("wrong, Coffee is a no-no to me");
    alert("wrong, Coffee is a no-no to me");

}

////------question 4 -----////
var climb = prompt("have I ever climbed a tree?");
console.log("have I ever climbed a tree?");

if (climb.toLowerCase() === "no" || climb.toLowerCase() === "n") {
    correctAnswers++;
    console.log("correct");
    alert("correct");
} else {
    console.log("wrong, i have weak arms");
    alert("wrong, I have weak arms");

}

////-----question 5-----////
var height = prompt("Am I shorter than 163cm?");
console.log("Am I shorter than 163cm?");

if (height.toLowerCase() === "yes" || height.toLowerCase() === "y") {
    correctAnswers++;
    console.log("correct, i am 160 cm tall");
    alert("correct, i am 160 cm tall");
} else {
    console.log("wrong, i am 160 cm tall");
    alert("wrong, i am 160 cm tall");

}

////-----question 6-----////
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
        correctAnswers++;
        console.log("you're correct");
        alert("you're correct");
        break;
    }
}
if (howManyCats != 6) {
    console.log("you're out of guesses, the correct answer is 6");
    alert("you're out of guesses, the correct answer is 6");
}



////-----question 7-----////
var flag = false;
var things = ["napkin", "mask", "glove", "higeen", "key", "book", "cup"];
var guessThings;
console.log("can you guess one thing i always have in my car these days?");

for (var i = 5; i >= 0; i--) { //for number of guesses
    guessThings = prompt("can you guess one thing i always have in my car these days?");

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
        if(i === 0){
            console.log("you have no guesses left. the things in my car are: " + things);
            alert("you have no guesses left. the things in my car are: " + things);
    
        }else {
            console.log("try again, you have " + i + " guesses left.");
            alert("try again, you have " + i + " guesses left.");
        }
    }

}



document.write("<h3 class=\"doc-write parheading\">Important things in my car these days:</h3> <ul class=\"doc-write\">");
for (var index = 0; index < things.length; index++) {
    document.write("<li>" + things[index] + "</li>");
}
document.write("</ul>");

document.write("<p class=\"doc-write\" >Your score is " + correctAnswers + "/7 </p>");
document.write("<p class=\"doc-write\" >It was nice playing with you <b id=\"fromScript\">" + name + "</b>!! </p>");