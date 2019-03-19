var musicQuestions = ["Who is the lead singer of the Foo Fighters?",
					   "Who sings the song Rolling in the Deep?",
					   "Where is the Rock and Roll Hall of Fame Museum located in?",
					   "Who produced and helped write Adele's hit song Hello?",
					   "Who invented the guitar?"];

var  musicAnswers =   ["Dave Grohl",
					  "Adele",
					  "Cleveland",
					  "Greg Kurstin",
					  "George Beauchamp"];

var moviesQuestions = ["What is the action movie franchise that starred both Jackie Chan and Chris Tucker?",
					   "Who played Don Vito Corleone in The Godfather?",
					   "What country in Africa did they film scences from Star Wars Episode IV?",
					   "Which movie won Best Picture at the 2017 Oscar Awards?",
					   "Who was the leading star of the silent movie era?"];

var moviesAnswers =   ["Rush Hour",
					   "Marlon Brando",
					   "Tunisia",
					   "Moonlight",
					   "Lillian Gish"];

var classicalartQuestions = ["Who drew the Mona Lisa?",
					         "What was the time period in the Middle Ages that works such as the Mona Lisa and The Last Supper were made in?",
							  "What type of sculpture did Michaelangelo used on the David masterpiece?",
							  "Where is the David sculpture located in?",
							  "What is the name of Vincent Van Goah's last painting?"];


var classicalartAnswers =   ["Leonardo Da Vinci",
							 "Renaissance",
							 "Marble",
							 "Florence",
							 "Wheat Field with Crows"];

var videogamesQuestions = ["Which company created the Assassin's Creed series?",
						  "What is the name of the city that Watch Dogs 2 take place in?",
						  "What is the name of the main protagonist of the Uncharted Series?",
						  "Who was on the cover of NBA Live 2003?",
                          "Which actor voiced Viktor Reznov in Call of Duty Blackops?"];

var videogamesAnswers = ["Ubisoft",
					    "San Francisco",
					    "Nathan Drake",
					    "Jason Kidd",
					    "Gary Oldman"];

var tvshowsQuestions = ["Who is the current host of the Tonight Show?",
					   "Which TV network airs Smackdown Live?",
		               "Which TV show opens up with a family driving around in a convertible?",
					   "What was the car that Sonny Crockett drove in during the final season of Miami Vice?",
					   "Which phrase did the name Saul Goodman come from?"];
				
var tvshowsAnswers = ["Jimmy Fallon",
				     "USA Network",
				     "Full House",
				     "Testarossa",
				     "It's all good,man"];

function initMusic() {
				    num = Math.floor(Math.random() * 5);
					//alert(num);
					var question = musicQuestions[num];
					document.getElementById("divQuestion").innerHTML = question;
}
				
function checkAnswerMusic() {
					//alert(num);
					var answer = document.getElementById("txtAnswer").value;
					answerEntered = answer.toLowerCase();
					var answertExpected = musicAnswers[num].toLowerCase();
					if(answerEntered == answertExpected) {
						alert("Correct!!!");
}
else {
		alert("Wrong!!!");
}
					//alert(answertExpected);
}
function initMovies() {
					num = Math.floor(Math.random() * 5);
					//alert(num);
					var question = moviesQuestions[num];
					document.getElementById("divQuestion").innerHTML = question;
}
				
function checkAnswerMovies() {
					//alert(num);
					var answer = document.getElementById("txtAnswer").value;
					answerEntered = answer.toLowerCase();
					var answertExpected = moviesAnswers[num].toLowerCase();
					if(answerEntered == answertExpected) {
						alert("Correct!!!");
}

else {
						alert("Wrong!!!");
}
					//alert(answertExpected);
}
function initClassicalart() {
					num = Math.floor(Math.random() * 5);
					//alert(num);
					var question = classicalartQuestions[num];
					document.getElementById("divQuestion").innerHTML = question;
				}
				
function checkAnswerClassicalart() {
					//alert(num);
					var answer = document.getElementById("txtAnswer").value;
					answerEntered = answer.toLowerCase();
					var answertExpected = classicalartAnswers[num].toLowerCase();
					if(answerEntered == answertExpected) {
						alert("Correct!!!");
}
else {
						alert("Wrong!!!");
}
					//alert(answertExpected);
}
function initVideogames() {
				    num = Math.floor(Math.random() * 5);
					//alert(num);
					var question = videogamesQuestions[num];
					document.getElementById("divQuestion").innerHTML = question;
}
				
function checkAnswerVideogames() {
					//alert(num);
					var answer = document.getElementById("txtAnswer").value;
					answerEntered = answer.toLowerCase();
					var answertExpected = videogamesAnswers[num].toLowerCase();
					if(answerEntered == answertExpected) {
						alert("Correct!!!");
}
else {
						alert("Wrong!!!");
}
					//alert(answertExpected);
}
function initTvshows() {
				    num = Math.floor(Math.random() * 5);
					//alert(num);
					var question = tvshowsQuestions[num];
					document.getElementById("divQuestion").innerHTML = question;
}
				
function checkAnswerTvshows() {
					//alert(num);
					var answer = document.getElementById("txtAnswer").value;
					answerEntered = answer.toLowerCase();
					var answertExpected = tvshowsAnswers[num].toLowerCase();
					if(answerEntered == answertExpected) {
						alert("Correct!!!");
}
else {
						alert("Wrong!!!");
}
					//alert(answertExpected);
}