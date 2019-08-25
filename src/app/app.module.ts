import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { StructureModule } from './core/structure/structure.module';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { MasterModule } from './master/master.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    ButtonModule,

    RouterModule,
    AppRoutingModule,
    // StructureModule
    LoginModule,
    MasterModule

  ],
  providers: [  
    { provide: LocationStrategy,
    useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
