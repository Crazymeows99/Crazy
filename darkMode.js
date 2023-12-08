// Changes the page to darkmode


let darkMode = true;			// initialization will switch this to light
function toggleDarkMode() {
	//console.log("-- DM Button Clicked --");
	/*if (darkMode) {
		console.log(" > Turning on Lightmode");
	} else {
		console.log(" > Turning on Darkmode");
	}*/

	// Toggle Dark and Light
	if (darkMode) {
		darkMode = false;
	} else {
		darkMode = true;
	}
	

	// Get Elements
	const darkModeElements =  document.querySelectorAll(".dm"); 

	// Run through each element
	for (let elementName in darkModeElements) {
		elementName = darkModeElements[elementName];
		if (typeof elementName == typeof toggleDarkMode) {
			continue;
		}
		let color = "blank";
		var classList = elementName.className;
		if (classList == undefined) {
			continue;
		}
		classList = classList.split(" ")
		//console.log("Classlist:");
		//console.log(classList);

		// Look for class colors
		for (let className in classList) {
			className = classList[className];
			// Change colors
			if (darkMode) {

				if (className.slice(0,2) == "dm") {
					color = className.slice(2);
				}
			} else {
				if (className.slice(0,2) == "lm") {
					color = className.slice(2);
				} 
			}
			
			// Add hash if needed
			if (color[0] == "H") {
				color = "#" + color.slice(1);
			}
		}
		
		//console.log("Color:")
		//console.log(color);
		elementName.style.backgroundColor = color;
	
		
	}; 
	
	//debug.innerHTML = "Works";
	//console.log("-- DM Function Finished --");
	
}


// Need to get rid of duck background without getting rid of duck color


