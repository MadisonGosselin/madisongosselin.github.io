/********************
 *
 * Universal for all pages
 *
 ********************/

const body = document.querySelector("body");
const modeSelector = document.querySelector(".modeSelector");
const menu = document.querySelector(".openMenu");
const overlay = document.querySelector(".overlay");

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

    // send an event so projectsScript can update accordingly
    const modeChangeEvent = new Event("modeChange");
    document.dispatchEvent(modeChangeEvent);
});

// open menu when hovered over
menu.addEventListener("mouseenter", () => {
    overlay.style.width = "350px";
});
overlay.addEventListener("mouseleave", () => {
    overlay.style.width = "0%";
});
