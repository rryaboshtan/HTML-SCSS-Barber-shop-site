const menuBtn = document.querySelector('.menuBtn')
const nav = document.querySelector('nav')
const menu = document.getElementById('menu')
nav.style.right = "-250px";

const showHideNav = () => {
    if (nav.style.right === '-250px') {
        nav.style.right = '0'
        menu.src = 'assets/img/close.png'
    }
    else {
        nav.style.right = '-250px'
        menu.src = 'assets/img/menu.png'
    }
}

menuBtn.addEventListener('click', showHideNav)


const myLazy = new LazyLoad({ elements_selector: ".photo" });