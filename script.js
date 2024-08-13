
// create instances of needed html elements
const body = document.querySelector("body")
const modeSelector = document.querySelector(".modeSelector")

console.log(localStorage.getItem("storedMode"))
let state = localStorage.getItem("storedMode") // create item in local storage to keep last mode

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

document.querySelector(".openMenu").addEventListener("click", (e) => {
    document.getElementById("nav").style.width = "35%"
})

document.querySelector(".closebtn").addEventListener("click", (e) => {
    document.getElementById("nav").style.width = "0%"
})