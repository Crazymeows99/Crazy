
/*
Example:  
const dmElements = {
	"#idNameHere": "dmClassHere",
	".classNameHere": "dmClassHere"
}
*/

const dmElements = {
	"body": "dark-mode",
	"#JamesBox": "dark-mode1",
	"#purplebox": "dark-mode2",
	"#purplebox2": "dark-mode2",
	"#purplebox3": "dark-mode2",
	"#purplebox4": "dark-mode2",
	"#purplebox5": "dark-mode2",
	"#purplebox6": "dark-mode2",
	"#purplebutton": "dark-mode2",
	"#purplebutton1": "dark-mode2",
	"#purpleborder": "dark-mode3",
	"#purpleborder1": "dark-mode3",
	"#purpleborder2": "dark-mode3",
	"#purpleborder3": "dark-mode3",
	"#purpleborder4": "dark-mode3",
	"#purpleborder5": "dark-mode3",
	"#purpleborder6": "dark-mode3",
	"#purpleborder7": "dark-mode3",
	"#purpleborder8": "dark-mode3",
	"#purpleborder9": "dark-mode3",
	"#purpleborder10": "dark-mode3",
	"#purpleborder11": "dark-mode3",
	"#purpleborder12": "dark-mode3",
	"#jamessays": "dark-mode4",
	"#hi": "dark-mode4",
	".::-webkit-scrollbar-thumb": "dark-mode5",
	".::-webkit-scrollbar-thumb:hover": "dark-mode6",
	".dropdown-content a": "dark-mode2-hover",
	".dropdown-content button": "dark-mode2-hover",
}


/*
Made: ".dropdown-content a": "dark-mode2",      --into-->    ".dropdown-content a": "dark-mode2-hover",
and deleted ".dropdown-content a:hover": "dark-mode2",
*/



/* To Convert:

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
	
	
	const element1 = document.getElementByClassName("border");
	element.classList.toggle("dark-mode3");
*/

