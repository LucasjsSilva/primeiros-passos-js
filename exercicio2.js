const preco_etanol = 4;
const preco_gasolina = 6;
const combustivel = 'gasolina';
const media_quilometro_por_litro = 10;
const distanciakm = 100;
const litros_distancia = distanciakm/media_quilometro_por_litro
let gasto;

if (combustivel === 'etanol'){
    gasto = litros_distancia*preco_etanol
    console.log(gasto.toFixed(2))
}else if (combustivel === 'gasolina'){
    gasto = litros_distancia*preco_gasolina
    console.log(gasto.toFixed(2))
}
else{
    console.log('Combustivel invalido!!!')
}
