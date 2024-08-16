/********************
 *
 * Projects
 *
 ********************/

const languages = document.querySelectorAll(".lang");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

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

    localStorage.setItem("storedLang", lang);
}
// on reload have it go to last selected language
pickLang(localStorage.getItem("storedLang"));

// allow arrows to scroll through languages
leftArrow.addEventListener("click", () => {
    counter = (counter - 1 + languages.length) % languages.length;
    pickLang(listOfLangs[counter]);
});

rightArrow.addEventListener("click", () => {
    counter = (counter + 1) % languages.length;
    pickLang(listOfLangs[counter]);
});

languages.forEach((language) => {});

// display projects for chosen language
languages.forEach((language) => {
    language.addEventListener("mouseenter", () => {
        switch (true) {
            case language.classList.contains("java"):
                document.querySelector(".javaInfo").style.visibility =
                    "visible";
                pickLang("java");
                counter = 0;
                break;

            case language.classList.contains("html"):
                // langInfo.innerText = "HTML";
                pickLang("html");
                counter = 1;
                break;

            case language.classList.contains("css"):
                // langInfo.innerText = "CSS";
                pickLang("css");
                counter = 2;
                break;

            case language.classList.contains("js"):
                // langInfo.innerText = "JavaScript";
                pickLang("js");
                counter = 3;
                break;

            case language.classList.contains("c"):
                // langInfo.innerText = "C";
                pickLang("c");
                counter = 4;
                break;

            case language.classList.contains("cpp"):
                // langInfo.innerText = "C++";
                pickLang("cpp");
                counter = 5;
                break;

            case language.classList.contains("csharp"):
                // langInfo.innerText = "C#";
                pickLang("csharp");
                counter = 6;
                break;

            case language.classList.contains("sql"):
                // langInfo.innerText = "SQL";
                pickLang("sql");
                counter = 7;
                break;

            case language.classList.contains("asm"):
                // langInfo.innerText = "Assembly";
                pickLang("asm");
                counter = 8;
                break;

            case language.classList.contains("py"):
                // langInfo.innerText = "Python";
                pickLang("py");
                counter = 9;
                break;

            default:
            // langInfo.innerText = "Error: Couldn't find language";
        }
    });
});
