

document.querySelector(".openMenu").addEventListener("click", (e) => {
    document.getElementById("nav").style.width = "35%";
})

document.querySelector(".closebtn").addEventListener("click", (e) => {
    document.getElementById("nav").style.width = "0%"
})