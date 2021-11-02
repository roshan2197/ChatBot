var questionNum = 0;

var question = '<h1>What is your name?</h1>';				  // first question

var output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question
var input = document.getElementById("input").value;

function bot() {
  var input = document.getElementById("input").value;
  console.log(input);

  if (questionNum == 0) {
    let msg = 'Hello'+input;
      
      let speech = new SpeechSynthesisUtterance();
      speech.lang = "en-US";
      
      speech.text = msg;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
      
      window.speechSynthesis.speak(speech);

    output.innerHTML = '<h1>Hello ' + input + '</h1>';// output response
    document.getElementById("input").value = "";   		// clear text box
    question = "<h1>What would you like to do?</h1><br><button";			    	// load next question		
    document.getElementById('but1').style.display = "inline-block";
    document.getElementById('but2').style.display = "inline-block";

    setTimeout(timedQuestion, 1000);									// output next question after 2sec delay
  }
 
  setTimeout(() => {
      // let msg = document.getElementById("output").value;
      let msg = question;
      
      let speech = new SpeechSynthesisUtterance();
      speech.lang = "en-US";
      
      speech.text = msg;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
      
      window.speechSynthesis.speak(speech);
  }, 1000
  )


}

function timedQuestion() {
  output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function (e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;																		// increase questionNum count by 1
  }
});

function change() {
  document.getElementById('output').innerHTML = '<h1>Select your problem</h1>';
  document.getElementById('but1').style.display = "none";
  document.getElementById('but2').style.display = "none";

  document.getElementById('but3').style.display = "inline-bloc";
  document.getElementById('but4').style.display = "inline-block";
  document.getElementById('but5').style.display = "inline-block";
  document.getElementById('but6').style.display = "inline-block";
  document.getElementById('but7').style.display = "inline-block";
  document.getElementById('but8').style.display = "inline-block";
  document.getElementById('but9').style.display = "inline-block";
  document.getElementById('but10').style.display = "inline-block";
  document.getElementById('but11').style.display = "inline-block";
  questionNum = 1;

  let msg = 'Select Your Problem';
      
      let speech = new SpeechSynthesisUtterance();
      speech.lang = "en-US";
      
      speech.text = msg;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
      
      window.speechSynthesis.speak(speech);
}

function covid() {
  let msg = "Please stay home , Wear a mask Fortunately";
      
      let speech = new SpeechSynthesisUtterance();
      speech.lang = "en-US";
      
      speech.text = msg;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
      // speech.voice = voices[10];
      window.speechSynthesis.speak(speech);
  document.getElementById('but1').style.display = "none";
  document.getElementById('output').innerHTML = 'For more information about the COVID-19 Vaccine please visit the following link:<br><a href="https://www.urmc.rochester.edu/coronavirus/coronavirus-vaccination.aspx.">https://www.urmc.rochester.edu/coronavirus/coronavirus-vaccination.aspx.</a>';
  document.getElementsById('covid').style.display = "inline-block";
}

function doct() {
  document.getElementById('output').innerHTML = '<h1>Available Doctors</h1>';

  let msg = 'Available doctors';
      
      let speech = new SpeechSynthesisUtterance();
      speech.lang = "en-US";
      
      speech.text = msg;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
      
      window.speechSynthesis.speak(speech);
  document.getElementById('but1').style.display = "none";
  document.getElementById('but2').style.display = "none";
  document.getElementById('but3').style.display = "none";
  document.getElementById('but4').style.display = "none";
  document.getElementById('but5').style.display = "none";
  document.getElementById('but6').style.display = "none";
  document.getElementById('but7').style.display = "none";
  document.getElementById('but8').style.display = "none";
  document.getElementById('but9').style.display = "none";
  document.getElementById('but10').style.display = "none";
  document.getElementById('but11').style.display = "none";
  document.getElementById('but12').style.display = "inline-block";

}

function detail(){
  let msg = 'doctors details';
      
      let speech = new SpeechSynthesisUtterance();
      speech.lang = "en-US";
      
      speech.text = msg;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
      
      window.speechSynthesis.speak(speech);
}
