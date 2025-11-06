import { Stack } from "./Stack";

const pilha = new Stack<string>();

pilha.push('Prato 1');
pilha.push('Prato 2');
pilha.push('Prato 3');
pilha.push('Prato 4');

console.log('Pratos na pilha');
pilha.printStack();

console.log(`Prato removido: ${pilha.pop()}`);

pilha.printStack();

pilha.push('Prato 5');

console.log(`Prato do topo: ${pilha.peek()}`);

pilha.printStack();

console.log(`Tamanho da pilha: ${pilha.count()}`);

console.log(`O prato 3 está na pilha? ${pilha.contains('Prato 3')}`);

pilha.clear();

console.log(`A pilha está vazia? ${pilha.isEmpty()}`);