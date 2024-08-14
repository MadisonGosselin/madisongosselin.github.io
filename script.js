
// create instances of needed html elements
const body = document.querySelector("body")
const modeSelector = document.querySelector(".modeSelector")
const menu = document.querySelector(".openMenu")

let state = localStorage.getItem("storedMode") // create item in local storage to keep last mode

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
    console.log("in")
    document.getElementById("nav").style.width = "20%"
})
document.querySelector(".overlay").addEventListener("mouseleave", () => {
    document.getElementById("nav").style.width = "0%"
})