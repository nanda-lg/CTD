//Em um arquivo diferente, crie o objeto literal curso que tem como 
//atributos: nome do curso (string), nota de aprovação (number), faltas máximas 
//(number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).
let Estudante = require ("./revisao");

let curso = {
    nome : "CTD",
    nota : 10,
    faltasMax : 8,
    estudantes : Estudante.lista,
}

console.log(curso.estudantes[1])