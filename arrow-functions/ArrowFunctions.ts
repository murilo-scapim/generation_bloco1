// Sintaxe:
// (lista de parâmetros) => { expressão }

const numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
numeros.forEach(n => console.log(n));

const funcao = (n: number) => console.log(n);

const somar = (n1: number, n2: number) => { return n1 + n2 };

console.log(`Resultado da soma: ${somar(5, 2)}`);

numeros.forEach(n => {
  if (n % 2 == 0)
    console.log(n);
});