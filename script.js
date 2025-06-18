function speak(){
    const text = document.getElementById("text").value;
    const speach = new
    SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speach);
}
