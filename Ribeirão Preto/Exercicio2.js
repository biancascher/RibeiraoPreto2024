function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function verificaFibonacci(numero) {
  let i = 0;
  let fibonacciAtual = fibonacci(i);

  while (fibonacciAtual <= numero) {
    if (fibonacciAtual === numero) {
      return true;
    }
    i++;
    fibonacciAtual = fibonacci(i);
  }
  return false;
}

let numero = 55; // Altere este número para o número que deseja verificar

if (verificaFibonacci(numero)) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
