import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { RouterModule, Routes } from "@angular/router";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { LoginGuard } from "@core/guards/login.guard";
import { IntroComponent } from "./intro-page.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

const MATERIAL_MODULE = [
  MatCardModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatInputModule,
  MatButtonModule
];

const routes: Routes = [
  { path: "", component: IntroComponent },
  { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
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
    ...MATERIAL_MODULE,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class IntroPageModule { }
