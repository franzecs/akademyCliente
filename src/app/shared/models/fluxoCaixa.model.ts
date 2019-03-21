import { Empresa, ItemFluxoCaixa } from "..";

export class FluxoCaixa{
    constructor(
       public id: string,
       public empresa: Empresa,
       public mes: number,
       public ano: number,
       public previsto: number,
       public executado: number,
       public itens?: ItemFluxoCaixa[]
    ){}
}