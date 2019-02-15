import { Turma } from "..";

export class Dias{
    constructor(
       public segunda: Turma[],
       public terca: Turma[],
       public quarta: Turma[],
       public quinta: Turma[],
       public sexta: Turma[],
       public sabado: Turma[]
    ){}
}