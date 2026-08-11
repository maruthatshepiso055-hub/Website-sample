/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

function sayHello() {
    alert("Welcome to Tshepi's Hair Journey Website!");
}
function showImage(image) {
    document.getElementById("largeImage").src = image.src;
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        button.innerHTML = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        button.innerHTML = "🌙 Dark Mode";
    }
}

window.onload = function() {
    const button = document.getElementById("themeBtn");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        button.innerHTML = "☀️ Light Mode";
    } else {
        button.innerHTML = "🌙 Dark Mode";
    }
};
document.getElementById("date").innerHTML =
"DATE: " + new Date().toDateString();
