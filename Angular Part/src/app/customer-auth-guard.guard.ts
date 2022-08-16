import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerAuthServiceService } from './customer-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthGuardGuard implements CanActivate {
  constructor(private router: Router, private cas: CustomerAuthServiceService) {


  }
  canActivate(): boolean {
    if (!this.cas.getToken()) {

      alert("you are not logged in. log in to continue");
      this.router.navigate(['/customer-login']);

    }
    return this.cas.getToken();
  }
}
