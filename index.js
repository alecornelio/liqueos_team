const header__links__icon = document.querySelector(".header__links__icon");
const header__links__a = document.querySelector(".header__links__a");

header__links__icon.addEventListener("click", () =>{
    header__links__a.classList.toggle("header__links__none");
});