function somar(a, b) {
    return a + b
}
console.log(somar(8,3))

function subtrair(a, b) {
    return a - b
}
console.log(subtrair(8,3))

function multiplicacao(a, b) {
    return a * b
}
console.log(multiplicacao(8,3))

function divisao(a, b){
    return a / b
}
console.log(divisao(8,3))

var a1 = 5
var a2 = 8
var soma = somar(a1,a2)
console.log("O resultado de "+a1+" mais "+a2+" é igual a "+soma)

var b1 = 10
var b2 = 5
var subtrai = subtrair(b1,b2)
console.log("O resultado de "+b1+" menos "+b2+" é igual a "+subtrai)

function quadradoDoNumero(a) {
    var quadrado = multiplicacao(a, a);
    return quadrado;
}
console.log(quadradoDoNumero(15))

function mediaDeTresNumeros(a, b, c) {
    var soma1 = somar(a, b); //soma a com b
    var total = somar(soma1, c);  //soma c com o total da soma a com b
    var dividir = divisao(total, 3);  // calcula a media dividindo o total por 3
    var media = dividir; // temos a media
    return media;
}
console.log(mediaDeTresNumeros(15,8,23))


//Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
//Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 
//Importante: calculaPorcentagem() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

function calculaPorcentagem(a,b) {
    var porcentagem = (a * (b/100))
    return porcentagem
}
console.log(calculaPorcentagem(300,15))

function calculaPorcentagem2(a,b) {
    var dividirPorc = divisao(b,100);
    var porcentagem2 = multiplicacao(dividirPorc,a);
    return porcentagem2
}
console.log(calculaPorcentagem2(300,15))

//Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação
//ao segundo parâmetro.
//Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).

function geradorDePorcentagem(a, b) {
    var valor = multiplicacao(divisao(a,b),100);
    return valor;
}
var p1 = 9;
var p2 = 90;
var porcentagem = geradorDePorcentagem(p1, p2);
console.log(p1 + " representa " + porcentagem + "% de " + p2);

function geradorDePorcentagem(a,b) {
    var divisaoGerador = divisao(a,b)
    var gerador = multiplicacao(divisaoGerador,100);
    return gerador;
}