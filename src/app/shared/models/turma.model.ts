import { Empresa, User } from "..";

export class Turma{
    constructor(
       public id: String,
       public dia: String,
       public horario: String,
       public tipo: String,
       public empresa: Empresa,
       public instrutor: User,
       public alunos?: User[]
    ){}
}