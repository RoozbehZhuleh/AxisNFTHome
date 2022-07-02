
const explore = document.querySelector(".navbar--explore");
const exploreDropDownList = document.querySelector(".dropdown-menu__list");
const exploreDropDownItem = document.querySelector(".explore__item");
const exploreDropDownWrapper = document.querySelector(".dropdown-menu--explore");
const navbarMenuItem = document.querySelector(".navbar__menu__item");



function toggleExplore(){
    
    exploreDropDownWrapper.classList.toggle("active");
    document.querySelector(".explore-fa").classList.toggle("rotate");
}

explore.addEventListener("click", toggleExplore);




const pages = document.querySelector(".navbar--pages");
const pagesDropDownList = document.querySelector(".dropdown-menu__list--pages");
const pagesDropDownItem = document.querySelector(".dropdown-menu__item");
const pagesDropDownWrapper = document.querySelector(".dropdown-menu__wrapper--pages");
// const navbarMenuItem = document.querySelector(".navbar__menu__item");


function togglePages(){

    
    document.querySelector(".pages-fa").classList.toggle("rotate");
    pagesDropDownWrapper.classList.toggle("active");
};

pages.addEventListener("click", togglePages);


// ----------------------------------------------------------------

const burgerIcon = document.querySelector(".burger-menu");
const burgerBar1 = document.querySelector(".burger-bar-1");
const burgerBar2 = document.querySelector(".burger-bar-2");
const burgerBar3 = document.querySelector(".burger-bar-3");
const burgerNav = document.querySelector(".burger__nav");

burgerIcon.addEventListener("click", () => {
    burgerBar1.classList.toggle("rotate45");
    burgerBar3.classList.toggle("display-none");
    burgerBar2.classList.toggle("rotate-45");
    burgerNav.classList.toggle("display-block");
})

