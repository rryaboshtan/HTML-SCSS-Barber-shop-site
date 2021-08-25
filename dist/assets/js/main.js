const menuBtn = document.querySelector(".menuBtn");
const nav = document.querySelector("nav");
const menu = document.getElementById("menu");
nav.style.right = "-250px";

const showHideNav = () => {
   if (nav.style.right === "-250px") {
      nav.style.right = "0";
      menu.src = "https://rryaboshtan.github.io/HTML-SCSS-Barber-shop-site/assets/img/close.webp";
   } else {
      nav.style.right = "-250px";
      menu.src = "https://rryaboshtan.github.io/HTML-SCSS-Barber-shop-site/assets/img/menu.webp";
   }
};

menuBtn.addEventListener("click", showHideNav);
// menuBtn.addEventListener('mouseenter', showHideNav)

const myLazy = new LazyLoad({ elements_selector: ".photo" });
