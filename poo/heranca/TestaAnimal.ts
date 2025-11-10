import { Animal } from "./Animal";
import { Cachorro } from "./Cachorro";
import { Cavalo } from "./Cavalo";
import { Preguica } from "./Preguica";

const cachorro: Cachorro = new Cachorro('Rex', 5);
const cavalo: Cavalo = new Cavalo('Pé de pano', 8);
const preguica: Preguica = new Preguica('Soneca', 3);

cachorro.emitirSom();
cachorro.correr();

preguica.nome = 'Sonequinha';
preguica.idade = 10;
console.log(`Novo nome da preguiça: ${preguica.nome}`);
console.log(`Nova idade da preguiça: ${preguica.idade}`);

preguica.emitirSom();
preguica.escalarArvore();

const animal: Animal = new Cavalo('Pangaré', 10);
animal.emitirSom();