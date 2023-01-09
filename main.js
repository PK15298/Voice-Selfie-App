var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


function start(){
    document.getElementById("box").innerHTML="";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("box").innerHTML=content;
    console.log(content);
    speak();
}

function speak(){
    var syn = window.SpeechSynthesis;
    speak_data = document.getElementById("box").innerHTML;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    syn.speak(utterThis);
    Webcam.attach(camera);
}
camera = document.getElementById("cam");
Webcam.set({
    width:360,
    hright:250,
    image_format:'png',
    png_quality:90    
});