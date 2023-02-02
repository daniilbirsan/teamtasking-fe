import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";

@Injectable({
    providedIn: MatSnackBarModule
})
export class HttpErrorService {
    constructor(private _snackBar: MatSnackBar) { }

    public handle(error: string): void {
        this._snackBar.open(error, "OK", {
            panelClass: ["red-snackbar"]
        });
    }
}