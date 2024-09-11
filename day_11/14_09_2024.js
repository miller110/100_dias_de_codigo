const saudacoes = document.getElementById('saudacoes');
const nome = document.getElementById('nome');

const mudarCorBotao = document.getElementById('mudarCor');
const mudarTextoBotao = document.getElementById('mudarTexto');

mudarCorBotao.addEventListener('click', () => {
    const corAleatoria = `#${Math.floor(Math.random()* 16777215).toString(16)}`;
    saudacoes.style.color = corAleatoria;
});

mudarTextoBotao.addEventListener('click', () => {
    saudacoes.textContent = "Seja muito bem vindo ao meu repositório!";
});