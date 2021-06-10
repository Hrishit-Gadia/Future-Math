var Player1 = localStorage.getItem("Player-1");
var Player2 = localStorage.getItem("Player-2");

var Score1 = 0;
var Score2 = 0;

var Number1;
var Number2;

var Question;
var Answer;

var Input;
var Button;
var Quiz;


function Set(){
document.getElementById("Player1").innerHTML = Player1 + " : " + Score1;
document.getElementById("Player2").innerHTML = Player2 + " : " + Score2;
}

function Show() {
    Number1 = document.getElementById("Number-1").value;
    Number2 = document.getElementById("Number-2").value;
    Answer = Number1 * Number2;
    Question = " <Center><Br> <H1 class = 'Green-Text'>" + Number1 + " x " + Number2 + "</H1>";
    Input = "<Br><H4 class = Orange-Text>Answer : <Input Id = 'User-Answer' placeholder = 'Enter the Answer here' type = 'number' class = 'set'><H4>";
    Button = "<br><Button onclick = 'check' class = 'set Yellow-Text'>Check My Answer</Button></Center>";
    Quiz = Question + Input + Button;
    document.getElementById("Output").innerHTML = Quiz;
    document.getElementById("Number-1").value = "";
    document.getElementById("Number-2").value = "";
}