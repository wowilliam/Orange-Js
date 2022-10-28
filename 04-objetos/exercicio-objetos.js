

class carro{
    marca;
    cor;
    gastoMediaPorKm;


    constructor(marca, cor, gastoMediaPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMediaPorKm = gastoMediaPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombuativel) {
        return distanciaEmKm * this.gastoMediaPorKm * precoCombuativel;
    }
}

const uno = new carro ('Fiat', 'Red', 1/12);
console.log(uno.calcularGastoDePercurso(70, 5));
const palio = new carro ('Fiat', 'preto', 1/10);
console.log(palio.calcularGastoDePercurso(70, 5));