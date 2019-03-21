import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'modal-message',
    templateUrl: './modal-message.component.html',
    styleUrls: ['modal-message.component.css']
})
export class ModalMessage {

    private Message: string;
    public MessageIsVisible: boolean;
    public type: string

    @Output() onConfirm: EventEmitter<boolean> = new EventEmitter<boolean>();

    showMessage(msg: string, type: string) {
        this.Message = msg;
        this.type = type;
        this.MessageIsVisible = true;
        if (this.type !== "delete") {
            setTimeout(() => { this.hideMsg() }, 3000);
        }
    }

    showAlert(message: string, type: AlertTypes, dismissTimeout?: number) {
        this.Message = message;
        this.type = type;
        this.MessageIsVisible = true;

        if (dismissTimeout) {
            setTimeout(() => { this.hideMsg() }, dismissTimeout);
        }
    }

    showAlertDanger(message: string) {
        this.showAlert(message, AlertTypes.DANGER)
    }

    showAlertSuccess(message: string) {
        this.showAlert(message, AlertTypes.SUCCESS, 3000)
    }

    showAlertInfo(message: string) {
        this.showAlert(message, AlertTypes.INFO)
    }

    showAlertWarning(message: string) {
        this.showAlert(message, AlertTypes.WARNING)
    }

    showAlertDelete(message: string) {
        this.showAlert(message, AlertTypes.DELETE)
    }

    hideMsg() {
        this.MessageIsVisible = false;
    }

    Confirmar() {
        this.onConfirm.emit(true);
        this.hideMsg();
    }
}

export enum MsgType {
    DELETE = "delete",
    SUCCESS = "success",
    ERROR = "danger",
    INFO = "info"
}

export enum AlertTypes {
    DANGER = 'danger',
    SUCCESS = 'success',
    INFO = 'info',
    WARNING = 'warning',
    DELETE = 'delete'
}