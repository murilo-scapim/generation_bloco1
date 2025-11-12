export class ExcecaoSimples extends Error {
  constructor(message: string) {
    super();
    this.name = 'Exceção simples';
    this.message = message;
  }
}