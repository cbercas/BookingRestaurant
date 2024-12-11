import { LoginComponent } from './pages/auth/login/login.component';
import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { Routes } from '@angular/router';
import { EditComponent } from './pages/edit/edit.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { StatsComponent } from './components/dashboard/stats/stats.component';
import { SignInMethod } from '@angular/fire/auth';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const routes: Routes = [

  {path:'home', component : HomeComponent,...canActivate(() => redirectUnauthorizedTo(["login"]))},
  {path:'bookings', component : BookingsComponent,...canActivate(() => redirectUnauthorizedTo(["login"]))},
  {path:'edit/:id', component : EditComponent,...canActivate(() => redirectUnauthorizedTo(["login"]))},
  {path:'login', component : LoginComponent},
  {path:'register', component: SigninComponent},
  {path: 'dashboard',component : DashboardComponent,children:[
    {path:'profile', component : ProfileComponent,...canActivate(() => redirectUnauthorizedTo(["login"]))},
    {path:'stats', component : StatsComponent,...canActivate(() => redirectUnauthorizedTo(["login"]))}
  ],...canActivate(() => redirectUnauthorizedTo(["login"]))},
  {path:'notfound', component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',redirectTo:'/home',pathMatch:'full'}

];
