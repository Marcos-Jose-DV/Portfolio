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

/*===== Show Habilidades e Curso =====*/
var isVisble = document.getElementById('habilidade__isvible')
var isVisbleCurso = document.getElementById('curso__isvible')
var hbIsVisible = document.getElementById('container__habilidade')
var csIsVisible = document.getElementById('container__curso')

isVisble.addEventListener('click', function () {
    ActiveContainer(isVisble, hbIsVisible);
});

isVisbleCurso.addEventListener('click', function () {

    ActiveContainer(isVisbleCurso, csIsVisible);
});
function ActiveContainer(button, container) {

    container.style.display = container.style.display == 'none' ? 'block' : 'none';
    if (container.style.display === 'none') {
        button.style.transform = 'rotate(' + 0 + 'deg)';
        //footer.style.position = 'fixed';
        tv.style.display = 'none';
       
        return;
    }
    button.style.transform = 'rotate(' + 90 + 'deg)';
    tv.style.display = 'block';
}

/*===== Song ANIMATION =====*/
var botoesComAudio = document.querySelectorAll('.som');
var audioAtual = null;
var gifAtual = null;
var curso = false;
var final = false;
var botaoAnterior = null;
var textoAnterior = null;
var count = 0;
botoesComAudio.forEach(function (botao) {
    var playText = botao.querySelector('.play__text');
    var textoAntigo = botao.getAttribute('data-texto-antigo');
    var play = botao.querySelector('.play');
    var img = play.querySelector('img');

    botao.addEventListener('click', function () {
        var novoAudio = botao.querySelector('.audio__habilidade');
        var idDoElemento = botao.id;

        if (img.src.endsWith('assets/img/icons/botao-play.png')) {
            img.src = 'assets/img/icons/botao-pause.png';

        } else {
            img.src = 'assets/img/icons/botao-play.png';
        }

        if (audioAtual && audioAtual !== novoAudio) {
            audioAtual.pause();
            audioAtual.currentTime = 0;
            audioAtual.parentElement.classList.remove('active');
        }

        novoAudio.addEventListener('ended', function () {
            if (curso) {
                botao.classList.remove('active');
                play.style.display = 'none'
                playText.innerHTML = textoAntigo;
                CloseGif();
            }
            else {
                img.src = 'assets/img/icons/botao-play.png'
                CloseGif();
            }
        });

        if (novoAudio.paused) {
            ConfigTexto(textoAnterior, botaoAnterior);
            novoAudio.play();
            audioAtual = novoAudio;
            botao.classList.add('active');
            mostrarGif(idDoElemento);
            return;
        }

        novoAudio.pause();
        novoAudio.currentTime = 0;
        audioAtual = null;
        botao.classList.remove('active');
        CloseGif();
    });

    botao.addEventListener('mouseenter', function () {
        playText.innerHTML = '';
        play.style.display = 'block'

        if (img.src.endsWith('assets/img/icons/botao-play.png') || img.src === '') {
            img.src = 'assets/img/icons/botao-play.png';
            return;
        }

        img.src = 'assets/img/icons/botao-pause.png';
    });
    botao.addEventListener('mouseleave', function () {
        if (!img.src.endsWith('assets/img/icons/botao-pause.png')) {
            if (final) {
                curso = true;
                img.src = 'assets/img/icons/botao-pause.png';
                botao.classList.remove('active');
                play.style.display = 'none'
                playText.innerHTML = textoAntigo;
            }
            else {
                botao.classList.remove('active');
                play.style.display = 'none'
                playText.innerHTML = textoAntigo;
                botaoAnterior = botao.getAttribute('data-texto-antigo');
                textoAnterior = playText;
            }
        }
    });
});

var figure = document.querySelector('.gif__teste')
var gif = figure.querySelector('img');
function mostrarGif(id) {
    gif.src = `assets/img/video/${id}.gif`;
    figure.style.display = 'block'
}
function CloseGif() {
    figure.style.display = 'none'
}
var novo= null;
function ConfigTexto(text, e) {
    if (e !== null) {

        novo = e;
        
        text.innerHTML = e;
    }
}









