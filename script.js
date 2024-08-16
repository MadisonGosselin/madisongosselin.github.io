// create instances of needed html elements
const body = document.querySelector("body");
const modeSelector = document.querySelector(".modeSelector");
const menu = document.querySelector(".openMenu");
const overlay = document.querySelector(".overlay");
const languages = document.querySelectorAll(".lang");
const langInfo = document.querySelector(".langInfo");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

/********************
 *
 * Dark mode/menu
 *
 ********************/

// create item in local storage to keep last mode
let state = localStorage.getItem("storedMode");

// load last known mode
const loadDisplay = () => {
    if (state == "light") {
        modeSelector.innerText = "🖤";
        body.classList.remove("darkMode");
    } else {
        modeSelector.innerText = "🤍";
        body.classList.add("darkMode");
    }
};
loadDisplay();

// switch mode based on user button
modeSelector.addEventListener("click", (e) => {
    if (state == "light") {
        localStorage.setItem("storedMode", "dark");
        body.classList.add("darkMode");
        modeSelector.innerText = "🤍";
    } else {
        localStorage.setItem("storedMode", "light");
        body.classList.remove("darkMode");
        modeSelector.innerText = "🖤";
    }
    state = localStorage.getItem("storedMode");
});

// open menu when hovered over
menu.addEventListener("mouseenter", () => {
    overlay.style.width = "350px";
});
overlay.addEventListener("mouseleave", () => {
    overlay.style.width = "0%";
});

/********************
 *
 * Projects
 *
 ********************/

// create a list of all languages, a counter for indexing
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
let counter = 0;

// function that uses formattting to highlight the inputted language
function pickLang(lang) {
    languages.forEach((other) => {
        if (!other.classList.contains(lang))
            other.style.transform = "scale(1.0)";
        else other.style.transform = "scale(1.7)";
    });
}
pickLang("java");

// allow arrows to scroll through languages
leftArrow.addEventListener("click", () => {
    counter = (counter - 1 + languages.length) % languages.length;
    pickLang(listOfLangs[counter]);
});

rightArrow.addEventListener("click", () => {
    counter = (counter + 1) % languages.length;
    pickLang(listOfLangs[counter]);
});

// display projects for chosen language
languages.forEach((language) => {
    language.addEventListener("mouseenter", () => {
        switch (true) {
            case language.classList.contains("java"):
                langInfo.innerText = "Java";
                pickLang("java");
                counter = 0;
                break;

            case language.classList.contains("html"):
                langInfo.innerText = "HTML";
                pickLang("html");
                counter = 1;
                break;

            case language.classList.contains("css"):
                langInfo.innerText = "CSS";
                pickLang("css");
                counter = 2;
                break;

            case language.classList.contains("js"):
                langInfo.innerText = "JavaScript";
                pickLang("js");
                counter = 3;
                break;

            case language.classList.contains("c"):
                langInfo.innerText = "C";
                pickLang("c");
                counter = 4;
                break;

            case language.classList.contains("cpp"):
                langInfo.innerText = "C++";
                pickLang("cpp");
                counter = 5;
                break;

            case language.classList.contains("csharp"):
                langInfo.innerText = "C#";
                pickLang("csharp");
                counter = 6;
                break;

            case language.classList.contains("sql"):
                langInfo.innerText = "SQL";
                pickLang("sql");
                counter = 7;
                break;

            case language.classList.contains("asm"):
                langInfo.innerText = "Assembly";
                pickLang("asm");
                counter = 8;
                break;

            case language.classList.contains("py"):
                langInfo.innerText = "Python";
                pickLang("py");
                counter = 9;
                break;

            default:
                langInfo.innerText = "Error: Couldn't find language";
        }
    });
});
