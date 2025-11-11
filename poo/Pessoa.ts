export abstract class Pessoa {

  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  public get nome() {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public abstract alimentar(): void;

  public visualizar(): void {
    console.log(`**** Dados da Pessoa *****`);
    console.log(`Nome: ${this._nome}`);
  }
}