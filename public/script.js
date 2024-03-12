const openMenuButton = document.querySelector(".menu-button.home")
const closeMenuButton = document.querySelector(".menu-button.menu")
const navShown = document.querySelector("nav")

// Opent het menu
openMenuButton.addEventListener('click', function() {
    navShown.classList.add("menu-open") // opent het menu
    openMenuButton.classList.add("hidden") // verbergt het open menu knopje
    document.querySelector(".menu-button.menu").style.display = "flex";
})

// Sluit het menu
closeMenuButton.addEventListener('click', function() {
    navShown.classList.remove("menu-open") // sluit het menu
    openMenuButton.classList.remove("hidden") // laat het open menu knopje weer zien
    document.querySelector(".menu-button.menu").style.display = "none";
})


