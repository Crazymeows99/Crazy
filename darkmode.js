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
function toggleFromClass(selector, toClass) {
	const items = document.querySelectorAll("."+selector); 
	for (let item in items) {
		item = items[item];
		if (typeof item != "object") {
			continue;
		}
		item.classList.toggle(toClass);
	}
}

// Used in conjunction with dmClasses array (as arg)
function toggleClasses(group) {
	for (var selector in group) {
		// ID
		if (selector[0] == "#") {
			selector = selector.substring(1);
			var itemElem = document.getElementById(selector);
			itemElem.classList.toggle(group["#"+selector]);
		}
		// Class
		else if (selector[0] == ".") {
			selector = selector.substring(1);
			toggleFromClass(selector, group["."+selector]);
		}
		// Error Logger
		else {
			console.log("Err:");
			console.log(selector);
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

	// Misc Darkmode
	document.body.classList.toggle("dark-mode");
	// Darmode Function
	toggleClasses(dmElements);
}
