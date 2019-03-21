import {FluxoCaixa, EmpresaDTO } from "..";

export class ItemFluxoCaixa{
    constructor(
       public id: string,
       public empresa: EmpresaDTO,
       public fluxoCaixa: FluxoCaixa,
       public tipo: string,
       public dia: string,
       public descricao: string,
       public valor: number,
       public status: string,
    ){}
}