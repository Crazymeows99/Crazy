
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
	".dropdown-content a": "dark-mode2-hover",
	".dropdown-content button": "dark-mode2-hover",
	"::-webkit-scrollbar-thumb": "dark-mode5",
	"::-webkit-scrollbar-thumb:hover": "dark-mode6",
}


/*
//-------------------------------------------------------------------------------------------------------------------
// Notable Changelog


Made: ".dropdown-content a": "dark-mode2",      --into-->    ".dropdown-content a": "dark-mode2-hover",
and deleted ".dropdown-content a:hover": "dark-mode2",

To Fix:
".::-webkit-scrollbar-thumb": "dark-mode5",
".::-webkit-scrollbar-thumb:hover": "dark-mode6",


//-------------------------------------------------------------------------------------------------------------------
// Warnings and Notes

Warning: Cannot include : in dmElements array. 

Fix: For hover elements, make a seperate css tag in CrazyStles.css for that element to seperate it from non-hover elements. 
	> Ex: If using .dark-mode2, can copy it all and change it to .dark-mode2-hover
     Then make a :hover tag to specify what it should do when hovered over. 
        > Ex: .dark-mode2-hover:hover
     In dmElements.js, add the selector and new tag
        > Ex: ".dropdown-content a": "dark-mode2-hover",




*/
//-------------------------------------------------------------------------------------------------------------------



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

