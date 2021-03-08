const hamburgerMenu = document.querySelector('.hamburger-menu');
const header = document.querySelector('.header');
const body = document.querySelector('body');

function toggleMobileNav() {
    header.classList.toggle('mobile-nav');
}

function disableScroll() {
    body.classList.toggle('disable-scroll');
}

hamburgerMenu.addEventListener('click', () => {
    toggleMobileNav();
    disableScroll();
});


// Features

const firstTab = document.getElementById('tab--1');
const secondTab = document.getElementById('tab--2');
const thirdTab = document.getElementById('tab--3');


const bookmarkFeature = document.getElementById('bookmark-feature');
const searchFeature = document.getElementById('search-feature');
const shareFeature = document.getElementById('share-feature');


firstTab.onclick = function () {
    firstTab.classList.add('features__item--red');
    secondTab.classList.remove('features__item--red');
    thirdTab.classList.remove('features__item--red');
    bookmarkFeature.classList.add('active');
    bookmarkFeature.style.display = "flex";
    searchFeature.style.display = "none";
    searchFeature.classList.remove('active');
    shareFeature.style.display = "none";
    shareFeature.classList.remove('active');

}

secondTab.onclick = function () {
    firstTab.classList.remove('features__item--red');
    secondTab.classList.add('features__item--red');
    thirdTab.classList.remove('features__item--red');
    searchFeature.classList.add('active');
    searchFeature.style.display = "flex";
    bookmarkFeature.style.display = "none";
    bookmarkFeature.classList.remove('active');
    shareFeature.classList.remove('active');
    shareFeature.style.display = "none";
}


thirdTab.onclick = function () {
    firstTab.classList.remove('features__item--red');
    secondTab.classList.remove('features__item--red');
    thirdTab.classList.add('features__item--red');
    shareFeature.classList.add('active');
    shareFeature.style.display = "flex";
    bookmarkFeature.style.display = "none";
    bookmarkFeature.classList.remove('active');
    searchFeature.style.display = "none";
    searchFeature.classList.remove('active');
}