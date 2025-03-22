// soma de MatrizesCrie duas matrizes 3x3 e escreva uma função para somá-las. A função deve retornar uma nova matriz com o resultado.



let matriz1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let matriz2 = [
    [10,11,12],
    [13,14,15],
    [16,17,18]
]

function somarMatrizes(matriz1, matriz2) {
    let resultado = [];
    for (let i = 0; i < matriz1.length; i++) {
        let linha = [];
        for (let j = 0; j < matriz1[i].length; j++) {
            linha.push(matriz1[i][j] + matriz2[i][j]);
        }
        resultado.push(linha);
    }
    return resultado;
}

let soma = somarMatrizes(matriz1, matriz2);

console.log('Soma das matrizes: ', soma);