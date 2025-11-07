export class Carro {
  
  // atributos
  private _fabricante: string;
  private _modelo: string;
  private _cor: string;
  private _tipoDeCombustivel: string;
  private _valorDeMercado: number;

  constructor(fabricante: string, modelo: string, cor: string,
    tipoDeCombustivel: string, valorDeMercado: number) {
      this._fabricante = fabricante;
      this._modelo = modelo;
      this._cor = cor;
      this._tipoDeCombustivel = tipoDeCombustivel;
      this._valorDeMercado = valorDeMercado;
    }

  // métodos
  public get fabricante(): string {
    return this._fabricante;
  }

  public get modelo(): string {
    return this._modelo;
  }

  public get cor(): string {
    return this._cor;
  }

  public get tipoDeCombustivel(): string {
    return this._tipoDeCombustivel;
  }

  public get valorDeMercado(): number {
    return this._valorDeMercado;
  }

  public set fabricante(fabricante: string) {
    this._fabricante = fabricante;
  }

  public set modelo(modelo: string) {
    this._modelo = modelo;
  }

  public set cor(cor: string) {
    this._cor = cor;
  }

  public set tipoDeCombustivel(tipoDeCombustivel: string) {
    this.tipoDeCombustivel = tipoDeCombustivel;
  }

  public set valorDeMercado(valorDeMercado: number) {
    this._valorDeMercado = valorDeMercado;
  }

  public ligar(): void {
    console.log(`${this._modelo} está ligado`);
  }

  public acelerar(velocidade: number) : void {
    console.log(`${this._modelo} está acelerando para ${velocidade} km/h`);
  }

  public frear(): void {
    console.log(`${this._modelo} está freando`); 
  }

  public abastecer(litros: number, precoPorLitro: number): number {
    return litros * precoPorLitro;
  }

  public desligar(): void {
    console.log(`${this._modelo} está desligado`);
  }

  public exibirDetalhes(): void {
    console.log("\n******** Dados do Carro ********");
    console.log(`Fabricante: ${this._fabricante}`);
    console.log(`Modelo: ${this._modelo}`);
    console.log(`Cor: ${this._cor}`);
    console.log(`Tipo de combustível: ${this._tipoDeCombustivel}`);
    console.log(`Valor de mercado: R$ ${this._valorDeMercado.toFixed(2)}`);
  }
}