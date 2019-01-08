import { Empresa, User } from "..";

export class Turma{
    constructor(
       public id: string,
       public dia: string,
       public horario: string,
       public tipo: string,
       public empresa: Empresa,
       public instrutor: User,
       public alunos?: User[]
    ){}
}