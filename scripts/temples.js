const today = new Date();
document.getElementById("currentYear").innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = "Last modification: " + document.lastModified;


const hamButton = document.querySelector("#menu");
const navItems = document.querySelector("nav ul");
const title = document.querySelector("h1");
const navContainer = document.querySelector(".nav-cont");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle('show');
    navItems.classList.toggle('show');
    title.classList.toggle('show');
    navContainer.classList.toggle('show');
});


window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        hamButton.classList.remove('show');
        navItems.classList.remove('show');
        title.classList.remove('show');
        navContainer.classList.remove('show');
    }
});