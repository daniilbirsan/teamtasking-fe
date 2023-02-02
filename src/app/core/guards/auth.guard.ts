import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenStorageService } from '@core/services/auth/token-storage.service';
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private tokenStorage: TokenStorageService, private router: Router) { };
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const isLoggedIn = this.tokenStorage.isLoggedIn();
        
        if(!isLoggedIn){
            this.router.navigate(['/login']);
        }

        return isLoggedIn;
    }

}