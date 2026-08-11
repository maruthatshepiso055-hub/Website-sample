

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

// Show button when scrolling down
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const topBtn = document.getElementById("topBtn");

    if (!topBtn) return;

    if (document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// Scroll to top
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
