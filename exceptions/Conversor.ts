try {
  const resultado = converter(123);
  console.log(resultado);
} catch (error) {
  console.log(`Ocorreu o erro na converção: ${Object.getPrototypeOf(error)}`);
}

console.log('Chegou aqui!');


export function converter(conteudo: any): string {
  return conteudo.toUpperCase();
}