import { converter } from "./Conversor";

try {
  const resultado = converter(123);
  console.log(resultado);
} catch (error) {
  if (error instanceof TypeError) {
    console.error(`TypeError: ${error.message}`);
  } else {
    console.error(`Outro erro: ${error}`);
  }
} finally {
  console.log(`O try-catch capturou o erro!`);
}