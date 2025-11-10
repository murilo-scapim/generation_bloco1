export class Transporte {

  private _capacidade: number;

  constructor(capacidade: number) {
    this._capacidade = capacidade;
  }

  public get capacidade() {
    return this._capacidade;
  }

  public set capacidade(capacidade: number) {
    this._capacidade = capacidade;
  }

  public visualizar(): void {
    console.log('***** Dados do transporte *****');
    console.log(`Capacidade: ${this._capacidade}`);
  }
}