import { Empresa, Endereco, Turma, EmpresaDTO } from "..";
import { Plano } from "./plano.model";
import { Semana } from "./uteis/semana.model";

export class User{
    constructor(
        public id: string,
        public nome: string,
        public email: string,
        public senha: string,
        public tipoUser: string,
        public empresa: EmpresaDTO,
        public perfis: string[],
        public ativo: boolean,
        public telefone: string,
        public celular: string,
        public endereco: Endereco,
        public rg: string,
        public cpf: string,
        public dataNascimento : Date,
        public url_perfil: string,
        public turmas?: Turma[],
        public dataCadastro? : Date,
        public sexo?: string,
        public peso?: string,
        public diaPagamento?: string,
        public plano?: Plano,
        public obs?: string,  
        public comissao?: number, 
        public faturamento?: number,
        public semana?: Semana,
        public dtr?: string,
    ){}
}
	