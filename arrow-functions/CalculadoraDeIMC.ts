interface Pessoa {
  nome: string,
  peso: number,
  altura: number
}

const pessoas: Pessoa[] = [
  { nome: 'Ana', peso: 55, altura: 1.62 },
  { nome: 'Enrique', peso: 85, altura: 1.80 },
  { nome: 'Jeferson', peso: 70, altura: 1.68 },
];

const calcularIMC = (peso: number, altura: number): number =>
  peso / (altura * altura);

pessoas.forEach((p: Pessoa) => {
  const imc = calcularIMC(p.peso, p.altura);
  console.log(`${p.nome} - IMC: ${imc.toFixed(2)}`);
});