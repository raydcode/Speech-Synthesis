import * as element from './utils/variables.js';

const speechSynthesis = window.speechSynthesis;

if (speechSynthesis) {
  console.log(' SpeechSynthesis Activated !!!');

  element.mic.addEventListener('click', speak);

  function speak(e) {
    e.preventDefault();
    const inputValue = element.input.value;
    const speech = new SpeechSynthesisUtterance();
    speech.lang = 'en-US';
    speech.text = inputValue;
    speech.volume = '1';
    speech.rate = '1';
    speech.pitch = '1';
    speech.voice = speechSynthesis.speak(speech);
  }
} else {
  alert(' SpeechSynthesis Not Supported !!!');
  element.speechContext.style.visibility = 'hidden';
}
