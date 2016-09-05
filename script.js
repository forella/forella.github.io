var text = [
	"",
	"Hey baby!",
	"As a surprise, I thought I'd make this site for you.",
	"Cheesy as it is",
	"here's a list of things",
	"that I love about you.",
	"You're beautiful",
	"You're hilarious",
	"You're understanding",
	"You're extremely supportive",
	"You have an INSANE booty",
	"You make me feel happier than I ever have",
	"We have the best possible time together",
	"We're fuckin relationship goalz",
	"You're a dime",
	"Overall, you're the perfect girl",
	"and I'm so happy that we're together.",
	"Yours,",
	"Eric <3"
];

//Change text every X seconds
setInterval(function() {
	document.getElementById("text").style.opacity = "0";
	setTimeout(function() {
		document.getElementById("text").innerHTML = text[0];
		document.getElementById("text").style.opacity = "1";
	}, 500);
	text.push(text.shift());
}, 4000);
