import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarModule  } from '@angular/material/snack-bar';

@Injectable({
    providedIn: MatSnackBarModule
})
export class HttpSuccessService {
    constructor(private _snackBar: MatSnackBar) { }

    public handle(success: string): void {
        this._snackBar.open(success, "OK", {
            panelClass: ["green-snackbar"]
        });
    }
}