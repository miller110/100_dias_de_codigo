const saudacoes = document.getElementById('saudacoes');
const nome = document.getElementById('nome');
const header = document.querySelector('header');

const mudarCorBotao = document.getElementById('mudarCor');
const mudarTextoBotao = document.getElementById('mudarTexto');

let alternarTexto = true;

mudarCorBotao.addEventListener('click', () => {
    const corAleatoria = `#${Math.floor(Math.random()* 16777215).toString(16)}`;
    saudacoes.style.color = corAleatoria;
    header.style.backgroundColor = corAleatoria;
});

mudarTextoBotao.addEventListener('click', () => {
    if (alternarTexto){
        saudacoes.textContent = "Seja muito bem vindo ao meu repositório!";
    } else {
        saudacoes.textContent = "Olá, eu sou Miller Santiago! Muito prazer!";
    }
    alternarTexto = !alternarTexto;
});