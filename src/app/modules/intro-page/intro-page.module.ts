import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { MaterialModule } from 'src/app/material.module';
import { IntroComponent } from './intro-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: "", component: IntroComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent }
];

@NgModule({
  declarations: [
    IntroComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class IntroPageModule { }
