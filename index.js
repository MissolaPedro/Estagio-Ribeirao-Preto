// 1)
function pertenceFibonacci(n) {
    let a = 0, b = 1;
    while (a <= n) {
        if (a === n) {
            return `O número ${n} pertence à sequência de Fibonacci.`;
        }
        [a, b] = [b, a + b];
    }
    return `O número ${n} não pertence à sequência de Fibonacci.`;
}

const numero = 21;
console.log(pertenceFibonacci(numero));

// 2)
function contarA(string) {
    const count = (string.match(/a/gi) || []).length;
    return `A letra 'a' ocorre ${count} vezes na string.`;
}

const texto = "A Amazônia é uma floresta tropical.";
console.log(contarA(texto));

// 3)
let INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);