const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 5;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamnho;
botoes[1].onclick = aumentaTamnho;


function diminuiTamnho() {
    if (tamanhoSenha > 1) {
        //tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamnho() {
    if (tamanhoSenha < 30) {
        //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

const campoSenha = document.querySelector('#campo-senha');

const letrasMaisculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
geraSenha();


function geraSenha() {

    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * letrasMaisculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        console.log(letrasMaisculas[numeroAleatorio])
    }
}


campoSenha.value = letrasMaisculas;