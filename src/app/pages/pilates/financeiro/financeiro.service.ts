import { Injectable, EventEmitter } from '@angular/core';
import { User, ItemFluxoCaixa } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  static instrutores: User[]
  static alunos: User[];
  static itens: ItemFluxoCaixa[];

  constructor() { }
}
