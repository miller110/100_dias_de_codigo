const jogo = document.querySelectorAll('.quadrado');
const reiniciar = document.getElementById('reiniciar');
let jogador = 'x';
let jogadas = 0;
let vencedor = false;

const combinacoesVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function verificarVitoria() {
    const quadrados = Array.from(jogo);

    for (let combinacao of combinacoesVencedoras){
        const [a, b, c] = combinacao;
        if (quadrados[a].innerHTML !== '' && quadrados[a].innerHTML === quadrados[b].innerHTML && quadrados[a].innerHTML === quadrados[c].innerHTML){
            vencedor = true;
            alert(`Jogador '${quadrados[a].innerHTML}' ganhou!`);
            window.location.reload();
        }
    }
}

function verificarEmpate() {
    if (jogadas === 9 && !vencedor) {
        alert('O jogo empatou!');
        window.location.reload();
    }
}

function jogar(celula){
    if (celula.innerHTML === '' && !vencedor) {
        celula.innerHTML = jogador;
        jogadas++;
        verificarVitoria();
        verificarEmpate();

        jogador = jogador === 'x' ? 'o' : 'x';
    }
}

for (let quadrado of jogo) {
    quadrado.addEventListener('click', () => jogar(quadrado));
}

reiniciar.addEventListener('click', () => {
    window.location.reload();
});