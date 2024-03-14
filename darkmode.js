var darkmode;

// Startup
function startup() {
	searchLocal();
	getMessage();
}

function searchLocal() {
 	// Darkmode Toggle
	darkmode = localStorage.getItem("darkmode");
	if (darkmode == "true") {
		darkmode = true;
	}
	else if (darkmode == "false") {
		darkmode = false;
	}
	else {
		darkmode = false;
		localStorage.setItem("darkmode", false);
	}
	if (darkmode) {
		myFunction(doToggle=false);
	}
}


// Darkmode Toggling
//---------------------------------------

// Used inside of ToggleClasses
function toggleFromSelector(selector, toClass) {
	const items = document.querySelectorAll("."+selector); 
	for (let item in items) {
		item = items[item];
		if (typeof item != "object") {
			continue;
		}
		item.classList.toggle(toClass);
	}
}

group = {
	"a": "dm",
	".b c": "dm",
	"#d": "dm",
}

// Used in conjunction with dmClasses array (as arg)
function toggleClasses(group) {
	for (var selector in group) {
		// Get all elements that match selector
		const items = document.querySelectorAll(selector);      // look into doc more
		if (items.length == 0) {
			console.log("Selector couldn't find anything for:");
			console.log(selector);
			console.log("");
			alert("Warning: Selector in dmElements.js couldn't find anything for the following:\n" + selector);
			continue
		}
		// Loop through elements
		for (let item in items) {
			item = items[item];
			if (typeof item != "object") {
				continue;
			}
			// Toggle class
			item.classList.toggle(group[selector]);
		}
	}
}

// Starts toggleClasses and toggles Darkmode Switching
function myFunction(doToggle=true) {
	// Toggle
	if (doToggle) {
		if (darkmode) {
			darkmode = false;
			localStorage.setItem("darkmode", false);
		} 
		else {
			darkmode = true;
			localStorage.setItem("darkmode", true);
		}
	}

	// Darmode Function
	toggleClasses(dmElements);
}
