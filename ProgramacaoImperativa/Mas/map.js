let numeros = [8,5,6,2]
let num = numeros.map(function (n){ return n*2})
console.log(num)

let idades = [30,18,85,7,8]
let idade = idades.filter(function(menores){
    return menores < 18
})
console.log(idade)

let nomes = ["Fernanda","Ederson", "Vivi"]
let nome = nomes.filter(function(nom){
    return nom != "Fernanda";
})
console.log(nome)

let somaPalavras = ["Fernanda", "Leite", "Garcia" ]
let palavras = somaPalavras.reduce(function(acumulador, dois){
    return acumulador + " " + dois;
})
console.log(palavras)

let paises = ['Brasil', 'Argentina', 'Bolivia']
paises.forEach(function(pais){
    console.log("O país é "+pais)
})
paises.forEach((pais)=>console.log("O país é "+pais))

//Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
let pares = [2, 4, 6, 8]
let impares = pares.map((imps)=>{return imps + 1;})
console.log(impares)

//Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let names = ["Fernanda", "João", "Maria","José", "Maria"]
let maria = names.filter((mary)=>{return mary == "Maria";})
console.log(maria)

//Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
//Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

let numbers = [1,5,9,3,7];
let organizados = numbers.reduce((acumulador, mais)=>{return acumulador + "-" + mais;})
console.log(organizados)

//Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.
animais = ["cachorro", "gato", "camelo"]
animais.forEach((pet)=>{console.log("O animal é "+pet)})