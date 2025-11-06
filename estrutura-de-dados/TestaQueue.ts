import { Queue } from "./Queue";

const fila = new Queue<number>();

for (let i = 1; i <= 10; i++) {
  fila.enqueue(i);
}

console.log("\nExibir todos os elementos da fila: ");
fila.printQueue();

console.log(`\nRemovido elemento: ${fila.dequeue()}`);

fila.printQueue();

fila.enqueue(11);

fila.printQueue();

console.log(`\nPrimeiro elemento: ${fila.peek()}`);

console.log(`\nTamanho da fila: ${fila.count()}`);

console.log(`\nO elemento 4 existe na fila? ${fila.contains(4)}`);

console.log(`\nLimpar a fila ${fila.clear()}`);

console.log(`\nA fila esta vazia? ${fila.isEmpty()}`);