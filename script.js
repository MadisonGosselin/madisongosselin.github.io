
// create instances of needed html elements
const body = document.querySelector("body")
const modeSelector = document.querySelector(".modeSelector")
const menu = document.querySelector(".openMenu")
const overlay = document.querySelector(".overlay")

const languages = document.querySelectorAll(".lang")
const langInfo = document.querySelector(".langInfo")

// create item in local storage to keep last mode
let state = localStorage.getItem("storedMode") 

// load last known mode
const loadDisplay = () => {
    if(state == "light") {
        modeSelector.innerText = "🖤"
        body.classList.remove("darkMode")
    } else {
        modeSelector.innerText = "🤍"
        body.classList.add("darkMode")
    }
}
loadDisplay()

// switch mode based on user button
modeSelector.addEventListener("click", (e) => {
    if(state == "light") {
        localStorage.setItem("storedMode", "dark")
        body.classList.add("darkMode")
        modeSelector.innerText = "🤍"
    } else {
        localStorage.setItem("storedMode", "light")
        body.classList.remove("darkMode")
        modeSelector.innerText = "🖤"
    }
    state = localStorage.getItem("storedMode")
})

// open menu when hovered over
menu.addEventListener("mouseenter", () => {
    overlay.style.width = "350px"
})
overlay.addEventListener("mouseleave", () => {
    overlay.style.width = "0%"
})

// display projects for chosen language
languages.forEach((language) => {
    language.addEventListener("mouseenter", () => {

        switch(true){

            case language.classList.contains("java"):
                langInfo.innerText = "Java"
                break;

            case language.classList.contains("html"):
                langInfo.innerText = "HTML"
                break;

            case language.classList.contains("css"):
                langInfo.innerText = "CSS"
                break;

            case language.classList.contains("js"):
                langInfo.innerText = "JavaScript"
                break;

            case language.classList.contains("c"):
                langInfo.innerText = "C"
                break;

            case language.classList.contains("cpp"):
                langInfo.innerText = "C++"
                break;

            case language.classList.contains("csharp"):
                langInfo.innerText = "C#"
                break;

            case language.classList.contains("sql"):
                langInfo.innerText = "SQL"
                break;
            
            case language.classList.contains("asm"):
                langInfo.innerText = "Assembly"
                break;
            
            case language.classList.contains("py"):
                langInfo.innerText = "Python"
                break;

            default:
                langInfo.innerText = "Error: Couldn't find language"
        }
    })
})