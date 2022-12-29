var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("box");

function start(){
    Textbox.innerHTML = "" ;
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
}