import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from "@core/services/auth/auth.service";
import { HttpErrorService } from "@core/services/error/http.service";
import { TokenStorageService } from "@core/services/auth/token-storage.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [ HttpErrorService ]
})
export class LoginComponent implements OnInit {
  isLoading = false;
  form = {} as FormGroup;

  constructor(
    private authService: AuthService, 
    private tokenStorage: TokenStorageService, 
    private router: Router, 
    private errorHandler: HttpErrorService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, Validators.required)
    })
  }

  get email() { return this.form.get("email") }
  get password() { return this.form.get("password") }

  onSubmit(): void {
    if (this.form.valid) {
      this.isLoading = true
      this.authService.login(this.form.controls["email"].value, this.form.controls["password"].value).subscribe(
        data => {
          this.tokenStorage.setSession(data);
          this.router.navigate(["/dashboard"]);
          window.location.reload();
        },
        err => {
          this.errorHandler.handle(err.error.message);
          this.isLoading = false;
        });
    }
  }
}
