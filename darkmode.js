var darkmode;
var admin;

// Startup
function startup() {
	searchLocal();
	getMessage();
	checkAdmin();
}

function merchStartup() {
	searchLocal();
	checkAdmin();
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

function checkAdmin() {
	admin = localStorage.getItem("admin");
	if (admin == "false") {
		admin = false;
	}
	else if (admin == "true") {
		admin = true;
	}
	else {
		admin = false;
		localStorage.setItem("admin", false);
	} 
}

function toggleAdmin() {
	if (admin) {
		admin = false;
		localStorage.setItem("admin", false);
	} else {
		admin = true;
		localStorage.setItem("admin", true);
	}
}




// Darkmode CSS File Toggling
//---------------------------------------
function toggleDMCSS() {
	let sheet = document.getElementById("darkmodeCSS");
	if (sheet.disabled) {
		sheet.disabled = false;
	} else {
		sheet.disabled = true;
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
function toggleDM(toggleType, group) {
	for (var selector in group) {
		// Get all elements that match selector
		const items = document.querySelectorAll(selector);      // look into doc more
		if (items.length == 0) {
			console.log("Selector couldn't find anything for:");
			console.log(selector);
			console.log("");
			if (admin) {
				alert("Warning: Selector in dmElements.js couldn't find anything for the following:\n" + selector);
			}
			continue
		}
		// Loop through elements
		for (let item in items) {
			item = items[item];
			if (typeof item != "object") {
				continue;
			}
			// Toggle element
			if (toggleType == "class") {
				item.classList.toggle(group[selector]);
			} 
			else if (toggleType == "imgSource") {
				if (darkmode) {
					item.src = group[selector][1]; 
				}
				else {
					item.src = group[selector][0]; 
				}
			}
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
	toggleDMCSS();
	toggleDM("class", dmElements);
	toggleDM("imgSource", dmImgSources);
}
