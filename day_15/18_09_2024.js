const contador = document.querySelector('.contador');
const botao = document.getElementById('botao');

let modo = 'caracteres';

botao.addEventListener('click', () => {
    let count = 0;
    
    if (modo === 'caracteres'){
        count = input.value.length;
        contador.textContent = `${count} caractere(s)`;
    }
});