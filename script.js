let text = document.querySelector(".consejo__subtitulo");

let cara = document.querySelector(".sobre__cara")
let ojos = document.querySelector(".sobre__ojo")
let labios = document.querySelector(".sobre__labios")
let brochas = document.querySelector(".sobre__brochas")


changeText = (texto) =>{
    text.innerHTML = `${texto}`
}

cara.addEventListener('mouseenter', function(){changeText("cara")});

ojos.addEventListener('mouseenter', function(){changeText("ojos")});

labios.addEventListener('mouseenter', function(){changeText("labios")});

brochas.addEventListener('mouseenter', function(){changeText("brochas")});

//Redes sociales

let footer = document.querySelector(".footer__subtitulo--cambio");

let ig = document.querySelector(".redes__ig")
let facebook = document.querySelector(".redes__facebook")
let twiter = document.querySelector(".redes__twiter")


changeText1 = (texto) =>{
    footer.innerHTML = `${texto}`
}

ig.addEventListener('mouseenter', function(){changeText1("http://www.instagram.com/valeria_laguna54")});

facebook.addEventListener('mouseenter', function(){changeText1("https://www.facebook.com/deysi.paola.921")});

twiter.addEventListener('mouseenter', function(){changeText1("https://twitter.com/nosedequienponer")});