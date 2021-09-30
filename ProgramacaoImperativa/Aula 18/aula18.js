/* Exercicio 1
Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops
 de 0 a 100 mostrando cada número do loop no console.
Caso o número da iteração somado com o número passado pelo parâmetro seja par, aparecerá no console: 
"O número x é par"*/

function loopDePares (num){
    for (let index = 0; index < 100; index++) {
        if ((index+num) % 2 == 0) {
        console.log("O número "+(index+num)+" é par.");
        } else
        {
            console.log(index);
        }
    }
}
loopDePares(1);

// Você deve criar uma função chamada loopDeImpares que receba um número e uma palavra como 
//parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
// Agora, modifique o código para que, caso esse número somado com o número passado por 
//parâmetro seja ímpar, mostre a palavra passada por parâmetro no console.
function loopDeImpares (num1, palavra){
    for (let index = 0; index < 100; index++) {
        if ((index+num1) % 2 != 0) {
        console.log(palavra+"   "+(index+num1));
        } else
        {
            console.log(index);
        }
    }
}
loopDeImpares(1,"Ímpar");

// Você deve criar uma função chamada soma que receba um número como parâmetro e retorne
//a soma de todos os seus números anteriores, incluindo o número recebido por parâmetro.
// Exemplo: 
// soma(3) deve retornar 6 pois faz (1 +2 +3)
// soma(8) deve retornar 36

function soma(num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
      result = result + i;
    }
    return result;
  }
  console.log(soma(8));

// Você deve criar uma função chamada newArray que receba um número como parâmetro e retorne um novo array com a
//quantidade de elementos equivalente ao valor do número que você passou por parâmetro.
// Exemplo: 
// newArray(5) deve retornar [1,2,3,4,5]
// newArray(10) deve retornar [1,2,3,4,5,6,7,8,9,10]

function newArray (a) {
    let resultado = [];
    for (let i = 1; i <= a; i++) {
        resultado.push(i);
    }
    return resultado;
    }

console.log(newArray(8));

function split (string) {
    let resultado = [];
    for (let i = 0; i < string.length; i++) {
        resultado.push(string[i]);
    }
    return resultado;
    }

console.log(split("fernanda"));

let arrayteste = [0, 1, 0, 2, 0, 2]

function moverZeros(a) {
    let resultado = [];
    let filtro1 = [];
    filtro1 = a.filter(0)
    resultado += filtro1.push()
}
console.log(moverZeros(1))
