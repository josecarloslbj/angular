import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Master1Component } from './master/master1.component';
import { Master2Component } from './master/master2.component';

const childRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

export const routes: Routes = [
  {
    path: '',
    component: Master1Component,
    children: childRoutes
  },
  {
    path: 'master2',
    component: Master2Component,
    children: childRoutes
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

