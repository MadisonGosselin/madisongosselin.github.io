
// create instances of needed html elements
const body = document.querySelector("body")
const modeSelector = document.querySelector(".modeSelector")
const menu = document.querySelector(".openMenu")
const overlay = document.querySelector(".overlay")

const languages = document.querySelectorAll(".lang")

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

// test area

const temp = document.querySelector(".projectInfo")

languages.forEach((language) => {
    language.addEventListener("mouseenter", () => {
        console.log("hi")
        switch(true){

            case language.classList.contains("java"):
                temp.innerText = "Java"
                break;

            case language.classList.contains("html"):
                temp.innerText = "HTML"
                break;

            case language.classList.contains("css"):
                temp.innerText = "CSS"
                break;

            case language.classList.contains("js"):
                temp.innerText = "JavaScript"
                break;

            case language.classList.contains("c"):
                temp.innerText = "C"
                break;

            case language.classList.contains("cpp"):
                temp.innerText = "C++"
                break;

            case language.classList.contains("sql"):
                temp.innerText = "SQL"
                break;

            default:
                temp.innerText = "Error: Couldn't find language"
        }
    })
})