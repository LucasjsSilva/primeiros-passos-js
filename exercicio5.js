const preco_etiqueta = 95.00;
const forma_de_pagamento = 3;
const numero_prestacoes = 3;

if (forma_de_pagamento === 1){
    console.log('Voce vai pagar: R$' + (preco_etiqueta - (preco_etiqueta * 0.10)))
}else if (forma_de_pagamento === 2){
    console.log('Voce vai pagar: R$' + (preco_etiqueta - (preco_etiqueta * 0.15)))
}else if (forma_de_pagamento === 3){
    if (numero_prestacoes === 2){
        console.log('Voce vai pagar: R$' + (numero_prestacoes*preco_etiqueta))
    }else if(numero_prestacoes > 2){
        console.log('Voce vai pagar: R$' + (numero_prestacoes*(preco_etiqueta+(preco_etiqueta*0.10))))
    }
}
