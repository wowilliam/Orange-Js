
const { gets, print } = require('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();
let maiorValorEncontado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontado) {
        maiorValorEncontado = numeroSorteado;
    }
    
}

print(maiorValorEncontado);