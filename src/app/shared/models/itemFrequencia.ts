import { User } from "..";

export class ItemFrequencia {

  constructor(
    public dia: string,
    public horario: string,
    public alunos: User[],
    public intDia?: number,
 ){
  this.intDia = this.getIntDia(this.dia);
 }
 
  getIntDia(dia: string): number {

    if (dia === 'DOMINGO') {
      return 0;
    }
    if (dia === 'SEGUNDA') {
      return 1;
    }
    if (dia === 'TERCA') {
      return 2;
    }
    if (dia === 'QUARTA') {
      return 3;
    }
    if (dia === 'QUINTA') {
      return 4;
    }
    if (dia === 'SEXTA') {
      return 5;
    }
    if (dia === 'SABADO') {
      return 6;
    }
  }

}
