var text = [
    "",
	"dear Ella",
	"thought I'd make this site for you to celebrate your birthday!",
    "i know this is pretty gay",
	"but here's a list of things I like about you",
	"you're gorgeous",
	"you're hilarious",
	"all the friends/office references",
    "the gibberish (jk i hate it)",
    "your little girl demeanor",
    "your laugh",
    "the ponytails",
	"you have an INSANE booty",
	"you're a dime",
    "like a straight up model",
    "i mean i'm literally dating a model, pretty sick",
    "you're really considerate",
    "you're pretty good at SMASHing",
    "great taste in food",
    "good taste in men",
    "youre JACKED",
    "and honestly, the last three months that I've known",
    "you for have been pretty amazing"
    "anyway (no s), hope you have a wonderful day",
    "love (hanging out with you)",
    "Eric"
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
