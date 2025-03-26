// questao 1
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
  

  let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  
  
  function printBoard() {
    console.log(board[0].join(' | '));
    console.log('---------');
    console.log(board[1].join(' | '));
    console.log('---------');
    console.log(board[2].join(' | '));
  }
  
  
  board[0][0] = 'X'; 
  board[1][1] = 'O'; 
  board[0][1] = 'X'; 
  board[1][2] = 'O'; 
  board[0][2] = 'X'; 
  

  printBoard();

  // Questão 

  function buscarNumero(matriz, numero) {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] === numero) {
          return { linha: i, coluna: j }; 
        }
      }
    }
    return null; 
  }
  
 
  let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(buscarNumero(matriz, 5)); 
  console.log(buscarNumero(matriz, 10)); 

  // Questão 

  function gerarMatrizIdentidade(N) {
    let matriz = [];
    
   
    for (let i = 0; i < N; i++) {
      matriz[i] = [];
      for (let j = 0; j < N; j++) {
        if (i === j) {
          matriz[i][j] = 1; 
        } else {
          matriz[i][j] = 0; 
        }
      }
    }
  
    return matriz;
  }
  
  
  console.log(gerarMatrizIdentidade(3));
  console.log(gerarMatrizIdentidade(4));

  // Questão 

  function rotacionarMatriz(matriz) {
    let n = matriz.length;
    let matrizRotacionada = [];
  

    for (let i = 0; i < n; i++) {
      matrizRotacionada[i] = [];
    }
  

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        matrizRotacionada[j][n - 1 - i] = matriz[i][j];
      }
    }
  
    return matrizRotacionada;
  }
  
 
  let matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  let matrizRotacionada = rotacionarMatriz(matrizOriginal);
  

  console.log('Matriz Original:');
  console.log(matrizOriginal);

  console.log('Matriz Rotacionada em 90 graus:');
  console.log(matrizRotacionada);
  
  // Questão 

  function somaBordas(matriz) {
    let soma = 0;
    let n = matriz.length;
  
    
    for (let j = 0; j < n; j++) {
      soma += matriz[0][j];
    }
  

    for (let j = 0; j < n; j++) {
      soma += matriz[n - 1][j];
    }
  
 
    for (let i = 1; i < n - 1; i++) {
      soma += matriz[i][0];     
      soma += matriz[i][n - 1];
    }
  
    return soma;
  }
  
  let matriz7 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(somaBordas(matriz));

  