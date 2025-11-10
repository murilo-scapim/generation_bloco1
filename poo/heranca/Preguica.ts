import { Animal } from "./Animal";

export class Preguica extends Animal {

  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  // sobrescreve o método emitirSom
  public emitirSom(): void {
      console.log(`${this._nome} emitindo um som sonolento: Ahhhh... Zzzzz`);
  }

  public escalarArvore(): void {
    console.log(`${this._nome} está escalando a árvore lentamente`);
  }
}