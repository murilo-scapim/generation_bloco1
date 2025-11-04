// let indentificador_da_variavel: tipo = valor;

let variavel: any = 'texto';
variavel = 123;
variavel = true;

let aprovado: boolean = true;

let peso: number = 75.50;
let idade: number = 25;
let nome: string = 'Murilo';

console.log(`Bom dia ${nome}! Seu peso é ${peso}kg e sua idade é ${idade} anos`);

let sobrenome = 'Araujo';
let anoNascimento = 1990;
console.log(`Tipo da variavel sobrenome: ${typeof sobrenome}`)
console.log(`Tipo da variavel anoNascimento: ${typeof anoNascimento}`)

// Null
let cliente: any = null;

// undefined
let ano: number | undefined;
console.log(ano);

// NaN
let numero = Number("abc");
console.log(numero);

// Infinity
let a = 1 / 0;
console.log(a);

// Constantes
const QUANTIDADE: number = 10;
const PORT: number = 3000;