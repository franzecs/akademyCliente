import { Empresa, User } from "..";

export class Plano{
    constructor(
       public id: String,
       public nome: String,
       public valor: number,
       public descricao: String,
       public empresa: Empresa,
    ){}
}