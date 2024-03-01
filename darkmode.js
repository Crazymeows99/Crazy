var darkmode;

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
		console.log("hello");
		myFunction(doToggle=false);
	}
}

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

	var element = document.body;
	element.classList.toggle("dark-mode");
	element = document.getElementById("JamesBox");
	element.classList.toggle("dark-mode1");
	
	element = document.getElementById("purplebox");
	element.classList.toggle("dark-mode2");
	
	element = document.getElementById("purplebox2");
	element.classList.toggle("dark-mode2");
	
	element = document.getElementById("purplebox3");
	element.classList.toggle("dark-mode2");
	
	element = document.getElementById("purplebox4");
	element.classList.toggle("dark-mode2");
	
	element = document.getElementById("purplebox5");
	element.classList.toggle("dark-mode2");
	
	element = document.getElementById("purplebox6");
	element.classList.toggle("dark-mode2");
	
	element = document.getElementById("purplebutton");
	element.classList.toggle("dark-mode2");
	
	element = document.getElementById("purplebutton1");
	element.classList.toggle("dark-mode2");
	
	element = document.getElementById("purpleborder");
	element.classList.toggle("dark-mode3");
	
	element = document.getElementById("purpleborder1");
	element.classList.toggle("dark-mode3");
	
	element = document.getElementById("purpleborder2");
	element.classList.toggle("dark-mode3");
	
	element = document.getElementById("purpleborder3");
	element.classList.toggle("dark-mode3");
	
	element = document.getElementById("purpleborder4");
	element.classList.toggle("dark-mode3");
	
	element = document.getElementById("purpleborder5");
	element.classList.toggle("dark-mode3");
	
	element = document.getElementById("purpleborder6");
	element.classList.toggle("dark-mode3");
	
	element = document.getElementById("purpleborder7");
	element.classList.toggle("dark-mode3");
	
	element = document.getElementById("purpleborder8");
	element.classList.toggle("dark-mode3");
	
	element = document.getElementById("purpleborder9");
	element.classList.toggle("dark-mode3");
	
	element = document.getElementById("purpleborder10");
	element.classList.toggle("dark-mode3");
	
	element = document.getElementById("purpleborder11");
	element.classList.toggle("dark-mode3");
	
	element = document.getElementById("purpleborder12");
	element.classList.toggle("dark-mode3");
	
	element = document.getElementById("jamessays");
	element.classList.toggle("dark-mode4");
	
	element = document.getElementById("hi");
	element.classList.toggle("dark-mode4");
	
	element = document.getElementById('ClTh');
	if (darkmode) {
		element.src='pics/ClThDm.png';
		alert("Dark Mode Not Finished")
	} else {
		element.src='pics/Class Titlehead New.png';
	}
	
	element = document.getElementById('H');
	if (darkmode) {
		element.src='pics/HDm.png';
	} else {
		element.src='pics/Fixed Heart.png';
	}
	
	element = document.getElementById('GalTh');
	if (darkmode) {
		element.src='pics/GalThDm.png';
	} else {
		element.src='pics/Gallery Titlehead.png';
	}
	
	element = document.getElementById('MTFTh');
	if (darkmode) {
		element.src='pics/MTFThDm.png';
	} else {
		element.src='pics/Meet the Founders Titlehead.png';
	}
	
	/*
	const element1 = document.getElementByClassName("border");
	element.classList.toggle("dark-mode3");
	
	element1 = document.getElementByClassName("dropdown");
	element.classList.toggle("dark-mode2");
	
	element1 = document.getElementByClassName("dropdown-content");
	element.classList.toggle("dark-mode2");
	
	element1 = document.getElementByClassName("dropdown-content a");
	element.classList.toggle("dark-mode2");
	
	element1 = document.getElementByClassName("dropdown-content a:hover");
	element.classList.toggle("dark-mode2");
	
	element1 = document.getElementByClassName("dropdown:hover .dropdown-content");
	element.classList.toggle("dark-mode2");
	*/
}
