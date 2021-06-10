var User1;
var User2;

function Add() {

    User1 = document.getElementById("Name-1").value;
    localStorage.setItem("Player-1" , User1);

    User2 = document.getElementById("Name-2").value;
    localStorage.setItem("Player-2" , User2);

    window.location = "Quiz.html";
}