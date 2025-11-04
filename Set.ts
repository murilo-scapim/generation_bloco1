// const nomeDoSet: Set<T> = new Set<T>();
// const nomeDoSet: Set<T> = new Set<T>([elemento1, elemento2, elemento3]);

const frutas: Set<string> = new Set<string>(['Abacate', 'Banana', 'Maçã', 'Morango', 'Abacate']);

console.log(frutas);

for (let fruta of frutas) {
  console.log(fruta);
}

console.log(`\nExiste a fruta Kiwi? ${frutas.has('Kiwi')}`);

console.log(frutas.delete('Abacate'));

console.log(`\nTamanho do set: ${frutas.size}`);