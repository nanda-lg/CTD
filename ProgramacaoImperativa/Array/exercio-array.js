const produtos = ["sapato", "calca", "cinto", "blusa"]

console.log("O Join concatena todos os elementos de um array.")
console.log(produtos.join())

console.log("O Pop captura a última palavra do array.")
console.log(produtos.pop())

console.log("O Push adiciona um elemento ao array.")
produtos.push('bermuda')
console.log(produtos)

console.log("O Shift captura a primeira palavra do array.")
console.log(produtos.shift())

console.log("O Unshift adiciona um ou mais elementos no início do array.")
produtos.unshift('colar')
console.log(produtos)

for(let papagaio=0; papagaio<=5; papagaio++){
console.log("Olá mundo")
}

for(let impar=1; impar<=10; impar++){
    if ( (impar % 2 !=0)  ) {
    console.log(impar);
    }
}

for (let tabuada=1; tabuada<=10; tabuada++){
    let valor= 5;
    console.log("O resultado de "+ valor +" x "+tabuada+ " é "+valor*tabuada)
}

for (let tabu=1; tabu<=10; tabu++){
    console.log(tabu+"----------------")
    for(let num=1; num <=10; num++){
    console.log( num +" x "+tabu+ " = "+num*tabu)
    }
}