/*
Sintaxe:
function nomeDaFuncao(parametro1: tipo, parametro2: tipo): tipo_de_retorno {
  // Corpo da função
  // return
}

nomeDaFuncao(argumento1, argumento2);
*/

function saudar(): void {
  console.log('\nBom dia!');
}
saudar()

function saudar2(nome: string): void {
  console.log(`\nBom dia, ${nome}!`);
}
saudar2('Gabrieli');

// parâmetro default
function saudar3(nome: string = 'mundo'): void {
  console.log(`Olá, ${nome}!`);
}
saudar3('Lia');

function somar(numero1: number, numero2: number): number {
  let resultado = numero1 + numero2;
  return resultado;
}
console.log(`O resultado da soma é ${somar(2, 5)}`);

function verificarPar(numero: number): boolean {
  return numero % 2 === 0;
}

let resultado = verificarPar(4);

if (resultado) {
  console.log('O numero é par!');
}

function somarArray(numeros: number[]): number {
  let total = 0;
  for (let numero of numeros) {
    total += numero;
  }
  return total;
}
console.log(`Resultado da soma do array é ${somarArray([1, 2, 3, 4, 5])}`);

// parâmetro opcional
function apresentar(nome?: string, idade?: number): string {
  if (nome && idade !== undefined) {
    return `Olá, meu nome é ${nome} e tenho ${idade} anos!`;
  } else if (nome) {
    return `Olá, meu nome é ${nome}!`;
  } else {
    return 'Olá, visitante!';
  }
}
console.log(apresentar('Geandro', 25));
console.log(apresentar('Ana'));
console.log(apresentar());
// console.log(apresentar(undefined, 10))

function calcularIMC(peso: number, altura: number): string | null {
  if (peso <= 0 || altura <= 0) {
    return null;
  }

  const imc = peso / (altura ** 2);
  let classificao: string;

  if (imc < 18.5) {
    classificao = 'Abaixo do peso';
  } else if (imc < 24.9) {
    classificao = 'Peso normal';
  } else if (imc < 29.9) {
    classificao = 'Sobrepeso';
  } else {
    classificao = 'Obesidade';
  }

  return classificao;
}
console.log(calcularIMC(70, 1.75));
console.log(calcularIMC(0, 1.70));