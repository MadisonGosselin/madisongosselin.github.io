/********************
 *
 * Projects
 *
 ********************/

const languages = document.querySelectorAll(".lang");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const langInfo = document.querySelectorAll(".langInfo");

// create a list of all languages
const listOfLangs = [
    "java",
    "html",
    "css",
    "js",
    "c",
    "cpp",
    "csharp",
    "sql",
    "asm",
    "py",
];
// create a variable to track the index, update with saved value
let currLangIndex = parseInt(localStorage.getItem("storedLang"), 10);
if (isNaN(currLangIndex)) {
    currLangIndex = 0; // Default to the first language if no valid value is found
}
highlightSelectedLang(currLangIndex);

// returns the index of the inputted language
function getLangSelected(lang) {
    return listOfLangs.findIndex((langName) =>
        lang.classList.contains(langName)
    );
}

// display the info of the selected language and make it bigger to emphasize
function highlightSelectedLang(langIndex) {
    const nameOfLang = listOfLangs[langIndex];

    // display only the info for the selected language
    langInfo.forEach((selectedLangInfo) => {
        if (!selectedLangInfo.classList.contains(nameOfLang))
            selectedLangInfo.style.display = "none";
        else selectedLangInfo.style.display = "inline-block";
    });

    // scale up selected language, scale down the rest
    languages.forEach((other) => {
        if (!other.classList.contains(nameOfLang)) {
            other.style.transform = "scale(1.0)";
            other.style.backgroundColor = "transparent";
            other.style.boxShadow = "none";
            other.style.borderRadius = "0px";
        } else {
            other.style.transform = "scale(1.4)";
            other.style.backgroundColor = getComputedStyle(
                document.body
            ).getPropertyValue("--underlayClr");
            other.style.boxShadow = "0 4px 8px 0 var(--accentClr)";
            other.style.borderRadius = "10px";
        }
    });

    localStorage.setItem("storedLang", langIndex);
}

// rehighlight to correct color when mode is changed
document.addEventListener("modeChange", () => {
    highlightSelectedLang(currLangIndex);
});

// update current index and highlight the chosen language
languages.forEach((lang) => {
    lang.addEventListener("mouseenter", () => {
        currLangIndex = getLangSelected(lang);
        highlightSelectedLang(currLangIndex);
    });
});

// move left from the chosen index when clicked
leftArrow.addEventListener("click", () => {
    currLangIndex =
        (currLangIndex - 1 + listOfLangs.length) % listOfLangs.length;
    highlightSelectedLang(currLangIndex);
});

// move right from the chosen index when clicked
rightArrow.addEventListener("click", () => {
    currLangIndex = (currLangIndex + 1) % listOfLangs.length;
    highlightSelectedLang(currLangIndex);
});

