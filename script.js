let textEle = document.getElementById("text");
let voiceEle = document.getElementById("voicelist");
let speechBtn = document.getElementById("speak");
let speechSynth = speechSynthesis;

speechSynth.addEventListener("voiceschanged",loadvoices);


function loadvoices(){
let voices = speechSynth.getVoices()
for (voice of voices){
    let option = document.createElement('option')
    option.value = voice.name;
    option.innerText =`${voice.name} ${voice.lang}`
          voiceEle.appendChild(option)

     }
}


function textToSpeech(text){
    let utterance = new SpeechSynthesisutterance('text');
    for(let voice of SpeechSynth.getVoices()){
        if(voice.name  ===  voicesEle.value){
            utterance.voice = voice;
        }
    }
    speechSynth.speak(utterance);
}


speechBtn.addEventListener("click",function(){
    if(textEle.value !== ""){
        if(!speechSynth.speaking){
            textToSpeech(textEle.value)
        }
    }
    else{
        alert("Enter some text")
    }
})
        
    
    