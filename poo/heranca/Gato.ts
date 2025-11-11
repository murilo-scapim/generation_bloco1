import { Animal } from "./Animal";

export class Gato extends Animal {

  constructor(nome: string, idade: number) {
    super(nome, idade);
  }
  
  public emitirSom(): void {
    console.log(`${this._nome} está miando! Miau miau!`);
  }
}