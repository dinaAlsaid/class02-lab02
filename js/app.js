'use strict';

alert("this is a guessing game, you have to guess things about ME, dina");

var name = prompt("what is your name?");

// console.log("hello "+name+" !! let's play.");
alert("hello " + name + "!! let's play.");

var age = prompt("am I older than 25 years old?");

if (age.toLowerCase() == "no" || age.toLowerCase() == "n") {
    // console.log("you're right, I am 24");
    alert("you're right, I am 24");
} else {
    // console.log("Nope, I am 24");
    alert("Nope, I am 24");

}

var cat = prompt("do I like cats?");
if (cat.toLowerCase() === "yes" || cat.toLowerCase() === "y") {
    // console.log("correct");
    alert("correct");
} else {
    // console.log("wrong, i do like cats");
    alert("wrong, I LOVE cats!!");

}

var coffee = prompt("do I drink coffee");
if (coffee.toLowerCase() === "no" || coffee.toLowerCase() === "n") {
    // console.log("correct");
    alert("correct");
} else {
    // console.log("wrong, Coffee is a no-no to me");
    alert("wrong, Coffee is a no-no to me");

}

var climb = prompt("have I ever climbed a tree?");
if (climb.toLowerCase() === "no" || climb.toLowerCase() === "n") {
    // console.log("correct");
    alert("correct");
} else {
    // console.log("wrong, i have weak arms");
    alert("wrong, I have weak arms");

}

var height = prompt("Am I shorter than 163cm?");
if (height.toLowerCase() === "yes" || height.toLowerCase() === "y") {
    // console.log("correct, i am 160 cm tall");
    alert("correct, i am 160 cm tall");
} else {
    // console.log("wrong, i am 160 cm tall");
    alert("wrong, i am 160 cm tall");

}

document.write("<p >It was nice playing with you <b id=\"fromScript\">" + name + "</b>!! </p>")