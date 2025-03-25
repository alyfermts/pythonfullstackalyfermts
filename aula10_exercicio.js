
let matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  let matriz2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
  ];
  
  
  function somarMatrizes(matrizA, matrizB) {
    let resultado = [];
  
    for (let i = 0; i < matrizA.length; i++) {
      let linha = [];
      for (let j = 0; j < matrizA[i].length; j++) {
        linha.push(matrizA[i][j] + matrizB[i][j]);
      }
      resultado.push(linha);
    }
  
    return resultado;
  }
  
  
  let resultadoSoma = somarMatrizes(matriz1, matriz2);
  
  
  console.log("Resultado da soma das matrizes:");
  console.log(resultadoSoma);
  

function transporMatriz(matriz) {
    let matrizTransposta = [];
    
    for (let i = 0; i < matriz[0].length; i++) {
      let novaLinha = [];
      for (let j = 0; j < matriz.length; j++) {
        novaLinha.push(matriz[j][i]);
      }
      matrizTransposta.push(novaLinha);
    }
  
    return matrizTransposta;
  }
  
  
  const matriz3x3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const matrizTransposta = transporMatriz(matriz3x3);
  console.log(matrizTransposta);
  

function multiplicarMatrizes(matrizA, matrizB) {
    
    let resultado = [
      [0, 0],
      [0, 0]
    ];
  
    
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
          resultado[i][j] += matrizA[i][k] * matrizB[k][j];
        }
      }
    }
  
    return resultado;
  }

  
  let matrizA = [
    [1, 2],
    [3, 4]
  ];
  
  let matrizB = [
    [5, 6],
    [7, 8]
  ];
  
  let resultado = multiplicarMatrizes(matrizA, matrizB);
  
  console.log("Resultado da multiplicação das matrizes:");
  console.log(resultado);
  
//4.Jogo da Velha: Implemente um jogo da velha usando uma matriz 3x3.
// O programa deve permitir que dois jogadores façam jogadas alternadas e verifique se há um vencedor.

//5.Busca em Matriz: Escreva uma função que receba uma matriz e um número, e retorne a posição (linha e coluna) desse número na matriz. Se o número não estiver na matriz, retorne null.

//6.Matriz Identidade: Crie uma função que gere uma matriz identidade de tamanho NxN (uma matriz onde os elementos da diagonal principal são 1 e os demais são 0).

//7.Rotação de Matriz: Escreva uma função que rotacione uma matriz 3x3 em 90 graus no sentido horário.

//8.Soma das Bordas: Escreva uma função que calcule a soma dos elementos das bordas de uma matriz NxN.
