export class Animal {

  protected _nome: string;
  private _idade: number;

  constructor(nome: string, idade: number) {
    this._nome = nome;
    this._idade = idade;
  }

  public get nome() {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public get idade() {
    return this._idade;
  }

  public set idade(idade: number) {
    this._idade = idade;
  }

  public emitirSom(): void {
    console.log(`${this._nome} está emitindo um som genérico`);
  }
}