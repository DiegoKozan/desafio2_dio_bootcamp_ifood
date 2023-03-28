/*faça umprogram para calcular um valor de  uma vaiagem.

você tera 5 variaveis, sendo elas;
1-preço do etanol;
2-preço da gasolina;
3-O tipo de combustível que esta no seu carro;
4-Gasto medio de combustível do carro por km;
5- Distancia em Km da viagem;
imprimir o valor que sera gasto para realisar essa viagem */

const precoGasolina = 6.66; 
const precoEtanol = 5.79;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoDeConbustivel = 'Gasolona';

const litrosConsumidos = distanciaEmKm / kmPorLitro;

if(tipoDeConbustivel ==='Etanol' ) {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));}