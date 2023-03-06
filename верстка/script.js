const buttonX = document.querySelector(".nav_menu_icon")
const content = document.querySelector(".nav_menu")
const main = document.querySelector("main")

buttonX.addEventListener("click", editMenu)


function editMenu() {
    content.classList.toggle("nav_menu_active")
    buttonX.classList.toggle("nav_menu_icon_x")
    main.classList.toggle("main-t-25")
}