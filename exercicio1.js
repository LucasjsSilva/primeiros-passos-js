const valor_combustivel = 5.4;
const media_quilometro_por_litro = 10;
const distanciakm = 100;

const litros_distancia = distanciakm/media_quilometro_por_litro;
const gastos = litros_distancia*valor_combustivel;

console.log(gastos.toFixed(2));


