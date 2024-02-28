function getMessage() {
	var i = Math.floor(messages.length * Math.random());
	let thing = document.getElementById("hi");
	thing.innerHTML = messages[i];
};

const messages = [
	"'youre the clap king jett' -brighton",
]

