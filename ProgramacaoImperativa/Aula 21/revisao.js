//Crie um objeto estudante que tenha como atributos: nome (string),
//  quantidade de faltas (number) e notas (array de números). 
//  Crie um construtor para ele e importe-o como o módulo estudante

//Nosso objeto estudante terá o método calcularMedia que retorna a 
// média de suas notas. Também terá um método chamado faltas, 
// que simplesmente aumenta o número de faltas em 1.

// let estudante = {
//     nome : "Fulano",
//     faltas : 5,
//     notas : [7,8,6,10]
// }

// console.log(estudante.nome);

function Estudante (nome, faltas, notas){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function(){
        let media = ( this.notas[0] + this.notas[1] + this.notas[2] + this.notas[3] ) / 4;
        return media ;
    }

    this.ausente = function(){
        this.faltas++;
    }
};

let estudante1 = new Estudante("Fernanda", 4, [10, 8,6,1],1,1);
let estudante2 = new Estudante("Ever", 1, [10, 8,6,1],1,1);
let estudante3 = new Estudante("Eder", 1, [10, 8,6,1],1,1);

module.exports = { 
    lista: [estudante1, estudante2, estudante3]
 }