import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../shared/primeng.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    PrimengModule,
    ReactiveFormsModule,
    RouterModule,

    PanelModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    InputSwitchModule,
    HttpClientModule,
  ],
  providers: [
    LoginService,
    HttpClientModule
  ],
  exports: [
    LoginComponent
  ],
})
export class LoginModule { }
