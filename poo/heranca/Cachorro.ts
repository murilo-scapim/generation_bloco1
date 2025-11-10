import { Animal } from "./Animal";

export class Cachorro extends Animal {

  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  // sobrescreve o método emitirSom
  public emitirSom(): void {
      console.log(`${this._nome} está latindo: Au au au!`); 
  }

  public correr(): void {
    console.log(`${this._nome} está correndo!`);
  }
}