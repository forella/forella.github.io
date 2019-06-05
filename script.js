var text = [
    "",
	"Dear Ella",
	"Thought I'd make this site for you to celebrate your birthday!",
    "I know this is pretty gay",
	"but here's a list of things I like about you",
	"You're GORGEOUS",
	"You're hilarious",
	"All the friends/office references",
    "The gibberish (jk i hate it)",
    "Your little girl demeanor",
    "Your laugh",
    "The ponytails",
	"You have an INSANE booty",
	"You're a dime",
    "Straight model",
    "Like I'm literally dating a model, pretty sick",
    "You're really considerate",
    "ur pretty good at SMASHing",
    "great taste in food",
    "good taste in men",
    "youre JACKED",
    "Anyway (no s), hope you have a wonderful day",
    "Love (hanging out with you), Eric",
];

//Change text every X seconds
setInterval(function() {
	document.getElementById("text").style.opacity = "0";
	setTimeout(function() {
        if (!text[0]) {
            text[0] = '';
        }
		document.getElementById("text").innerHTML = text[0];
		document.getElementById("text").style.opacity = "1";
	}, 500);
	text.shift();
}, 4000);
