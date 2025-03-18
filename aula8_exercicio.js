
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function notas(n1,n2,n3,n4) {
    let medianota = (n1 + n2 + n3 + n4)/ 4;
    if ( medianota > 7 ) {
        return "aprovado";
     } else if (medianota >= 5 && medianota < 7) {
        return " recuperacao";
     } else {
        return "reprovado";
     } 
} 
     
rl.question("Digite a primeira nota:", (nota1) => {
    rl.question("Digite a segunda nota:", (nota2) => {
        rl.question("Digite a terceira nota:", (nota3) => {
            rl.question("Digite a quarta nota:", (nota4) => {
                nota1 = parseFloat(nota1);
                nota2 = parseFloat(nota2);
                nota3 = parseFloat(nota3);
                nota4 = parseFloat(nota4);

                let resultado = notas(nota1, nota2, nota3, nota4);
                console.log("Classificação das notas: ", resultado);

                rl.close();
            });
        });
    });
});



const readline = require('readline');

const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
