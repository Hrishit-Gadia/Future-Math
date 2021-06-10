var Player1 = localStorage.getItem("Player-1");
var Player2 = localStorage.getItem("Player-2");

var Score1 = 0;
var Score2 = 0;

var Number1;
var Number2;

function Set(){
document.getElementById("Player1").innerHTML = Player1 + " : " + Score1;
document.getElementById("Player2").innerHTML = Player2 + " : " + Score2;
}

function Show() {
    Number1 = document.getElementById("Number-1").value;
    Number2 = document.getElementById("Number-2").value;
}