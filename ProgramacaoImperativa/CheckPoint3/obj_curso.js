// Micro Desafio - Passo 3 / Passo 4 / Passo 5 / Passo 6
let lista_de_estudante = require("./lista");
let aluno = require("./func_construc");

// console.log(lista);

let curso = {
    nome_do_curso: "Programação Imperativa",
    nota_de_aprov: 7,
    faltas_max: 2,
    lista_de_estudante,
    lista_nova: function (aluno) {
        this.lista_de_estudante.push(aluno);
        return this.lista_de_estudante;
    },
    aprovado: function (aluno) {
        let media = aluno.calcularMedia();
        if (media >= this.nota_de_aprov && aluno.quantidade_de_faltas < this.faltas_max) {
            return true;
        }
        else if (media >= 1.1 * this.nota_de_aprov && aluno.quantidade_de_faltas == this.faltas_max) {
            return true;
        }
        else {
            return false;
        }
    },
    aprovados: function () {
        let resultados = []
        for (let i = 0; i < this.lista_de_estudante.length; i++) {
            let media = this.lista_de_estudante[i].aluno.calcularMedia();
            if (media >= this.nota_de_aprov && this.lista_de_estudante.aluno.quantidade_de_faltas < this.faltas_max) {
                resultados = resultados + [true];
            }
            else if (media >= 1.1 * this.nota_de_aprov && this.lista_de_estudante[i].aluno.quantidade_de_faltas == this.faltas_max) {
                resultados = resultados + [true];
            }
            else {
                resultados = resultados + [false];
            }
            return resultados;
        }
    }
}


console.log(curso.aprovado(new aluno("Ana", 5, [7, 10, 10])));
console.log(curso.aprovado(lista_de_estudante[4]));
console.log(curso.aprovados());