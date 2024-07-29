const nota1 = 0;
const nota2 = 3;
const nota3 = 10;
const media = (nota1 + nota2 + nota3)/3;
console.log(media.toFixed(2))
if (media < 5){
    console.log('Reprovado!!')
}else if (media >=5 && media <= 7){
    console.log('Recuperação!!')
}else if (media > 7){
    console.log('Passou de Semestre!!')
}
