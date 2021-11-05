// very nice potato
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {
    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);

    if (Content == "take my selfie")
    {
        console.log("taking selfie ---");
        Speak();
    }
}

function Save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}

function Speak()
{
    var synth = window.speechSynthesis;

    speakData = "Taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        TakeSnapshot();
        Save();
    }, 5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

function TakeSnapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}