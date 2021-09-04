let array = ["fernanda","leite", "garcia"];

// Exercicio 1 Acessar elementos específicos de um array.
console.log(array[2])

// Exercicio 2 Modificar cada um dos elementos de um array e imprimi-los no console.
array[0] = "uva"
array[1] = "mamao"
array[2] = "cereja"
console.log(array)

// Exercicio 3 Adicionar elementos a um array.
array.push("Nome Completo")
console.log(array)

//Exercicio 4 Extrair elementos de um array.
array.pop()
console.log(array)

// Exercicio 5 Comparar elementos de um array com os elementos de outro. 
let array2 = ["morango", "laranja", "limao"]
console.log(array===array2)

/*
let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])
RETORNA = 5 ou 10

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])
RETORNA = Spiderman

let str = “una string qualquer”
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])
RETORNA ="una string qualquer";
*/

// Exercicio Reverse
array.reverse()
console.log(array)

function invertido(arrayInvert){
    let arrayInv =[arrayInvert[2], arrayInvert[1], arrayInvert[0]];
    return arrayInv
}
console.log(invertido(array))

//Somar array
let arrayNum = [8,4,6,2]
function somarArray(umArray){
    return (umArray[0]+umArray[1]+umArray[2]+umArray[3])
}
console.log(somarArray(arrayNum))

//arrayNum
let arrayJoin = ["o", "l", "a"]
console.log("|--- Resultado Array Join ---|")
console.log(arrayJoin.join("/"))

function funcaoJoin(joinFake) {
    let joinFunction = ""; 
    for (let index = 0; index < joinFake.length; index++) {
        joinFunction += joinFake[index]
    } 
    return joinFunction
}

function funcaoJoin2(joinFake2) {
    let joinFunction2 = ""; 
    for (index in joinFake2) {
        joinFunction2 += joinFake2[index]
    }
    return joinFunction2
}

console.log("|--- Resultado Join Fake---|")
console.log(funcaoJoin(arrayJoin))
console.log(funcaoJoin2(arrayJoin))

//Coleção de Filmes
let filmes = ["star wars","matrix","mr. robot","o preco do amanha","a vida é bela"]
function letrasMaiusculas(arrayFilme){
    for (index in arrayFilme){
        arrayFilme[index] = arrayFilme[index].toUpperCase()
    }
}

letrasMaiusculas(filmes)
console.log(filmes)

let filmesInfantil = ["toy story","finding Nemo","kung-fu panda","wally","fortnite"]
letrasMaiusculas(filmesInfantil)

var filmesUnidos;
function juntarFilmes(filmes1,filmes2){
    filmesUnidos =  filmes1.concat(filmes2);
    return filmesUnidos
}

console.log(juntarFilmes(filmes,filmesInfantil))
var retornoPop = filmesUnidos.pop()
console.log(filmesUnidos)
console.log(retornoPop)

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function notas(nota1,nota2){
    for(index in nota1){
        if (nota1[index] == nota2[index]) {
            console.log(`A nota ${nota1[index]} é igual a ${nota2[index]}`)
        }else {
            console.log(`A nota ${nota1[index]} é diferente a ${nota2[index]}`)
        }
    }
}
notas(asiaScores,euroScores)