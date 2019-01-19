import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@Angular/forms';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component'
import { MenuComponent } from './menu/menu.component'
import { LowerDirective } from './directives/lowercase.directive'
import { UpperDirective } from './directives/uppercase.directive'
import { ModalUtilComponent } from './modal-util/modal-util.component';
import { ModalMessage } from './modal-util/modal-message.component'
import { MyPipe } from './pipes/upperCase.pipes';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { IkMaskDirective } from './directives/ik-mask.directive';
import { LoginComponent } from './security/login/login.component';
import { PaginationComponent } from './pagination/pagination.component';
import { UploadComponent } from './upload/upload.component';
import { DiaSemana } from './pipes/diaSemana.pipes'; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  declarations: [LoadingSpinnerComponent, MenuComponent, UploadComponent, DiaSemana,
                 LowerDirective, UpperDirective,ModalUtilComponent, ModalMessage, MyPipe, 
                 CheckboxGroupComponent, IkMaskDirective, LoginComponent, PaginationComponent],
  exports: [LoadingSpinnerComponent, MenuComponent, FormsModule, CheckboxGroupComponent, DiaSemana,
              PaginationComponent, UploadComponent, LowerDirective, UpperDirective, 
              ModalUtilComponent, ModalMessage,MyPipe, IkMaskDirective]
})
export class ComponentsModule { }
