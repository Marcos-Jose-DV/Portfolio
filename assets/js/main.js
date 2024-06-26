/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== Popup ANIMATION =====*/
document.querySelectorAll('.popup__container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');

    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
};

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.project__img, .skills__data, .course__img', { interval: 200 });

/*===== DOWLOAD MOBILE =====*/
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.querySelector(".download__apk").style.display = 'block';
} else {
    document.querySelector(".download__apk").style.display = 'none';
}

document.querySelector(".download__apk").addEventListener('click', function () {
    var url = "https://github.com/Marcos-Jose-DV/Portfolio_Mobile/raw/main/dowload/com.marcosjose.appportfolio.apk";
    var file = "com.marcosjose.appportfolio.apk"

    var link = document.createElement("a");
    link.href = url;
    link.download = file

    document.querySelector(".download__apk").appendChild(link);
    link.click();
    document.querySelector(".download__apk").removeChild(link);
});
/*===== Link Projects =====*/
document.querySelectorAll(".link__button").forEach(app => {
    app.onclick = () => {
        var parameter = app.querySelector(".download__Button").dataset.app;
        var url = `https://github.com/Marcos-Jose-DV/${parameter}`;

        var link = document.createElement("a");
        link.href = url
        link.target = "_blank"

        app.appendChild(link);
        link.click();
        app.removeChild(link);
    }
});