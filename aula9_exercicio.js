
let numeros = ["1", "5", "10"];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += Number(numeros[i]);
}
console.log(soma)

function ordenarString(arr) {
    return arr.sort();
}

let frutas2 = ["banana","maçã","laranja","abacte"];
console.log("frutas ordenadas:", ordenarString(frutas2));

function removerduplicados(arr) {
    return [...new Set(arr)];
}

let numeros3 = [1,2,2,3,4,4,];
console.log("Sem duplicados:", removerduplicados(numeros3));