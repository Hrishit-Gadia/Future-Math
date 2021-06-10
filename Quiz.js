var Player1 = localStorage.getItem("Player-1");
var Player2 = localStorage.getItem("Player-2");

var Score1 = 0;
var Score2 = 0;

var Number1;
var Number2;

var Answer;
var Decision;

var Question
var Input;
var Button;
var Quiz;

var Ans = "P1";
var Que = "P2";


function Display() {
    document.getElementById("Player1").innerHTML = Player1 + " : " + Score1;
    document.getElementById("Player2").innerHTML = Player2 + " : " + Score2;
}

function Show() {
    Number1 = document.getElementById("Number-1").value;
    Number2 = document.getElementById("Number-2").value;
    Answer = Number1 * Number2;
    Question = " <Center><Br> <H1 class = 'Green-Text'>" + Number1 + " x " + Number2 + "</H1>";
    Input = "<Br><H4 class = Orange-Text>Answer : <Input Id = 'User-Answer' placeholder = 'Enter the Answer here' type = 'number' class = 'set'><H4>";
    Button = "<br><Button onclick = 'Check()' class = 'set Yellow-Text'>Check My Answer</Button></Center>";
    Quiz = Question + Input + Button;
    document.getElementById("Output").innerHTML = Quiz;
    document.getElementById("Number-1").value = "";
    document.getElementById("Number-2").value = "";
}

function Check() {
    Decision = document.getElementById("User-Answer").value;

    if (Decision == Answer) {
       if( Ans == "P1"){
        Score1 = Score1 + 1;
        document.getElementById("Player1").innerHTML = Player1 + " : " + Score1;
       }
       else {
        Score2 = Score2 + 1;
        document.getElementById("Player2").innerHTML = Player2 + " : " + Score2;}

    }

    if (Ans == "P1"){
        Ans = "P2";
        document.getElementById("Type-player-2").innerHTML = "Answer Turn";
        document.getElementById("Type-player-1").innerHTML = "Question Turn";
    }
    else{
        Ans = "P1";
        document.getElementById("Type-player-1").innerHTML = "Answer Turn";
        document.getElementById("Type-player-2").innerHTML = "Question Turn";
    }

    document.getElementById("Output").innerHTML = "";
}