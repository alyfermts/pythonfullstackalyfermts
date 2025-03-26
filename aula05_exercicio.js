
let preco = 150;
let desconto = 20;
let valor_final = preco - desconto;
console.log("preco - desconto =", valor_final);


let peso = 70;
let altura = 1.75;
let imc = peso / (altura ** 2);
console.log("IMC:", imc);


let idade = 22;
let tem_experiencia = true;
let elegivel_concurso = idade >= 18 && tem_experiencia;
console.log("Elegível ao concurso?", elegivel_concurso);



let nivel_acesso = parseInt(prompt("Digite seu nível de acesso:"));
if (nivel_acesso === 1) {
    console.log("Acesso restrito");
} else if (nivel_acesso === 2) {
    console.log("Acesso Parcial");
} else if (nivel_acesso === 3) {
    console.log("Acesso Total");
} else {
    console.log("Nível de acesso inválido");
}


let celsius = parseInt(prompt("Digite sua temperatura em Celsius:"));
let fahrenheit = (celsius * 9/5) + 32;
console.log("Temperatura em Fahrenheit:", fahrenheit);

let valor_inteiro = parseInt(prompt("Digite um número:"));