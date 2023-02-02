import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "@core/services/auth/auth.service";
import { HttpErrorService } from "@core/services/error/http.service";
import { HttpSuccessService } from "@core/services/success/http.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
  providers: [ HttpSuccessService, HttpErrorService ]
})
export class SignupComponent implements OnInit {
  isLoading = false;
  form = {} as FormGroup;

  constructor(
    private authService: AuthService,
    private errorHandler: HttpErrorService,
    private successHandler: HttpSuccessService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "firstName": new FormControl(null, Validators.required),
      "lastName": new FormControl(null, Validators.required),
      "password": new FormControl(null, Validators.required)
    })
  }

  get email() { return this.form.get("email") }
  get firstName() { return this.form.get("firstName") }
  get lastName() { return this.form.get("lastName") }
  get password() { return this.form.get("password") }

  onSubmit(): void {
    if (this.form.valid) {
      this.isLoading = true;
      this.authService.register(this.email?.value, this.firstName?.value, this.lastName?.value, this.password?.value)
        .subscribe(
          data => {
            this.resetForm();
            this.successHandler.handle(data.message)
            this.isLoading = false;
          },
          err => {
            this.errorHandler.handle(err.error.message);
            this.isLoading = false;
          }
        )
    }
  }

  resetForm(): void {
    this.form.reset();
    this.email?.setErrors(null);
    this.firstName?.setErrors(null);
    this.lastName?.setErrors(null);
    this.password?.setErrors(null);
  }
}
