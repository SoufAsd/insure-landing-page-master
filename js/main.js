function openMenu(button) {
    if (!document.getElementsByClassName("mobile-menu")[0].classList.contains('opend')) {
        // document.getElementsByClassName("mobile-menu")[0].style.display = "flex"
        document.getElementsByClassName("mobile-menu")[0].style.opacity = 1
        document.getElementsByClassName("menu-btn")[0].style.backgroundImage = "url('images/icon-close.svg')";
        document.getElementsByClassName("mobile-menu")[0].classList.add('opend');

        document.body.style.overflowY = "hidden";
    } else {
        document.getElementsByClassName("mobile-menu")[0].classList.remove('opend');
        document.getElementsByClassName("mobile-menu")[0].style.opacity = 0
            // document.getElementsByClassName("mobile-menu")[0].style.display = "none"
        document.getElementsByClassName("menu-btn")[0].style.backgroundImage = "url('images/icon-hamburger.svg')";
        document.body.style.overflowY = "scroll";
    }
}