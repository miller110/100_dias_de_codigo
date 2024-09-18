const imagens = document.getElementById('img');
const img = document.querySelectorAll('#img img');
const btnAnterior = document.getElementById('anterior');
const btnProximo = document.getElementById('proximo');

let idX = 0;
let intervalo = setInterval(carrossel, 1800);

function carrossel(){
    idX++;

    if(idX > img.length - 1){
        idX = 0;
    }

    imagens.style.transform = `translateX(${-idX * 500}px)`;
}

imagens.addEventListener('mouseover', () => {
    clearInterval(intervalo);
});

imagens.addEventListener('mouseout', () => {
    intervalo = setInterval(carrossel, 1800);
})


function imagemAnterior() {
    idX--;

    if (idX < 0){
        idX = img.length - 1;
    }

    imagens.style.transform = `translateX(${-idX * 500}px)`;

    clearInterval(intervalo);
    intervalo = setInterval(carrossel, 1800);
}

function proximaImagem() {
    idX++;

    if (idX > img.length - 1){
        idX = 0;
    }

    imagens.style.transform = `translateX(${-idX * 500}px)`;

    clearInterval(intervalo);
    intervalo = setInterval(carrossel, 1800);
}

btnAnterior.addEventListener('click', imagemAnterior);
btnProximo.addEventListener('click', proximaImagem);

