var text = [
	"",
	"Hey baby!",
	"Happy one month!",
	"As cheesy as it is",
	"here's a list of things",
	"that I love about you.",
	"You're beautiful.",
	"You're hilarious.",
	"You're understanding.",
	"You're extremely supportive.",
	"You have an INSANE booty.",
	"You make me feel happier than I ever have.",
	"We have the best possible time together.",
	"We're fuckin relationship goalz.",
	"You're a dime.",
	"Overall baby, you're the perfect girl.",
	"I'm so happy we're together.",
	"Once again, happy one month!",
	"Love, Eric."
];

//Change text every X seconds
setInterval(function() {
	document.getElementById("text").style.opacity = "0";
	setTimeout(function() {
		document.getElementById("text").innerHTML = text[0];
		document.getElementById("text").style.opacity = "1";
	}, 500);
	text.push(text.shift());
}, 3500);