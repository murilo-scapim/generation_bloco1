// const nome_do_array: Array<T> = new Array<T>();
// const nome_do_array: Array<T> = new Array<T>(elemento1, elemento2, elemento3);

const pessoas: Array<string> = new Array<string>('Enrique', 'Bruno', 'Murilo', 'Geandro');

for (let pessoa of pessoas) {
  console.log(pessoa);
}

pessoas.push('Daniel');

for (let pessoa of pessoas) {
  console.log(pessoa);
}

pessoas.push('Enrique');
pessoas.unshift('Gabrieli', 'Eduardo');
console.log(`\nO indíce da pessoa Eduardo é: ${pessoas.indexOf('Eduardo')}`);

console.log(`A pessoa Enrique existe no array?: ${pessoas.includes('Enrique')}`);

console.log(`O elemento do índice 3 é: ${pessoas[3]}`);

pessoas[3] = 'Jeferson';

console.log(`\nO tamanho do array pessoas é ${pessoas.length}`)
