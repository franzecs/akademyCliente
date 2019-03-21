
export class Semana{
    constructor(
       public domingo: number, 
       public segunda: number,
       public terca: number,
       public quarta: number,
       public quinta: number,
       public sexta: number,
       public sabado: number,
       public total?: number
    ){ }

    geraTotal(): number{
        return this.total = this.domingo + this.segunda + this.terca + 
        this.quarta + this.quinta + this.sexta + this.sabado
    }
}