import { ViewChild } from "@angular/core";
import { ModalMessage, MsgType } from "../../components";

export abstract class PageList {

  @ViewChild(ModalMessage) modalMsg: ModalMessage
  page: number = 0;
  count: number = 5;
  counts:number[] = [2,5,10,20,50];
  pages: Array<number>;
  totalElements: number;
  search: string = '';

  constructor() { } 

  pagination(event){
    this.page = event.page
    this.count = event.count
    this.getList(event.page,event.count);
  }

  openModal(msg, type) {
    this.modalMsg.showMessage(msg, type)
  }

  getList(page, count){ }
}
