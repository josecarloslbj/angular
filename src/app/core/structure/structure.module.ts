import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/shared/primeng.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { PanelModule } from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputSwitchModule} from 'primeng/inputswitch';
import { LoginService } from 'src/app/login/login.service';
import { LoginModule } from 'src/app/login/login.module';
@NgModule({
  imports: [
    // DirectivesModule,
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
    LoginModule
    //HelpModule
  ],
  declarations: [
    // AccessDeniedComponent,
    //  BreadcrumbComponent,
    // FooterComponent,
    LoginComponent,
    //MaintenanceComponent,
    //TopBarComponent
  ],
  exports: [
    //AccessDeniedComponent,
    //BreadcrumbComponent,
    //FooterComponent,
    LoginComponent,
    //MaintenanceComponent,
    //MenuModule,
    //TopBarComponent
  ],
  providers: [
    // BreadcrumbService
    LoginService
  ]
})
export class StructureModule { }
