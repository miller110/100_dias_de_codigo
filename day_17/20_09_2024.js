function gerarSenha() {
    const tamanho = document.getElementById('size').value || 8;
    const incluirMaiuscula = document.getElementById('incluirMaiuscula').checked;
    const incluirMinuscula = document.getElementById('incluirMinuscula').checked;
    const incluirNumero = document.getElementById('incluirNumero').checked;
    const incluirCaractereEspecial = document.getElementById('incluirCaractereEspecial').checked;

    if (tamanho <= 0){
        alert("Por favor, insira uma quantidade válida de caracteres.");
        return;
    }
    
    
    
    if (!incluirMaiuscula && !incluirMinuscula && !incluirNumero && !incluirCaractereEspecial) {
        alert("Por favor, selecione pelo menos uma opção de caractere.");
        return;
    }

    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const caracteresEspeciais = '!@#$%^&*()_+[][]|;:,.<>?';

    
    let caracteres = '';
    
    if (incluirMaiuscula) {
         caracteres += letrasMaiusculas;
    }
    if (incluirMinuscula) {
        caracteres += letrasMinusculas;
    }
    if (incluirNumero) {
        caracteres += numeros;
    }
    if (incluirCaractereEspecial) {
        caracteres += caracteresEspeciais;
    }

    let senha = '';
    
    for (let i = 0; i < tamanho; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    document.getElementById('senha').textContent = senha;
}

function copiarSenha() {
    const senha = document.getElementById('senha').textContent;
    if (!senha) return;

    navigator.clipboard.writeText(senha)
    .then(() => {
        alert('Senha copiada para a área de transferência!');
    })
    .catch(err => {
        console.error("Falha ao copiar: ", err);
    });

}

const gerador = document.getElementById('gerador');
const copiar = document.getElementById('copiar');

gerador.addEventListener('click', gerarSenha);
copiar.addEventListener('click', copiarSenha);