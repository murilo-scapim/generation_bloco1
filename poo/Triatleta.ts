import { Ciclista } from "./interfaces/Ciclista";
import { Corredor } from "./interfaces/Corredor";
import { Nadador } from "./interfaces/Nadador";
import { Pessoa } from "./Pessoa";

export class Triatleta extends Pessoa implements Ciclista, Corredor,
Nadador {

  nadar(): void {
    console.log(`Triatleta está nadando`);
  }

  correr(): void {
    console.log(`Triatleta está correndo`);
  }

  pedalar(): void {
    console.log(`Triatleta está pedalando`);
  }

  aquecer(): void {
    console.log(`Triatleta está aquecendo`);
  }
  
  public alimentar(): void {
    console.log(`Triatleta se alimentando!`);
  }
}