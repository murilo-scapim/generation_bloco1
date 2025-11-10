import { Animal } from "./Animal";

export class Cavalo extends Animal {

  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  // sobrescreve o método emitirSom
  public emitirSom(): void {
      console.log(`${this._nome} relinchando! Iiiiirrinh!`);
  }

  public correr(): void {
    console.log(`${this._nome} está correndo!`);
  }
}