import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';

import { AngularFireModule } from 'angularfire2'
import { AngularFireStorageModule } from 'angularfire2/storage'
import { AngularFireDatabaseModule } from 'angularfire2/database'

import { environment } from '../environments/environment'

//--> para configurar o locale em português
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt)
//<--

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@Angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './config/app-routing.module';
import { ComponentsModule } from './components/components.module';
import { LayoutModule } from './pages/layout/layout.module';
import { AuthInterceptor } from './components/security/auth.interceptor';
import { AplicationErrorHandle } from './config/app.error-handle';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    PDFExportModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-Br'},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,multi: true},
    {provide: ErrorHandler, useClass: AplicationErrorHandle},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
