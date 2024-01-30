var tabs = document.querySelectorAll('#tab');
var navs = document.querySelectorAll('.nav-link');
var footer = document.querySelector('.footerShow');
var tv = document.querySelector('.tv__image');
var DivIcon = document.querySelector('.play__icon');


/*===== Tab ANIMATION =====*/
// Adicionar backgroundColor no tab ativada
document.addEventListener('DOMContentLoaded', function () {
    tabs[0].style.backgroundColor = '#1f9bcf';
});

navs.forEach(function (nav) {
    nav.addEventListener('focus', function () {
        navs.forEach(function (n) {
            n.classList.remove('active');
        });

        nav.classList.add('active');
    });
});

/*===== Adicionar evento de clique a cada elemento =====*/
tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
        // Remover a cor de fundo de todos os elementos
        tabs.forEach(function (otherTab) {
            otherTab.style.backgroundColor = '';
        });

        // Definir a cor de fundo apenas para o elemento clicado
        tab.style.backgroundColor = '#1f9bcf';
    });
});

/*===== Popup ANIMATION =====*/
document.querySelectorAll('.about__container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
        document.querySelector('.navBarShow').style.display = 'none'
        //document.querySelector('.footerShow').style.position = 'relative';
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
    document.querySelector('.navBarShow').style.display = 'block'
    //document.querySelector('.footerShow').style.position = 'fixed';
};











