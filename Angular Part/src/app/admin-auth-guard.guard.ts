import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminAuthServiceService } from './admin-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardGuard implements CanActivate {

  constructor(private router: Router, private aas: AdminAuthServiceService) {


  }
  canActivate(): boolean {
    if (!this.aas.getToken()) {

      alert("you are not logged in. log in to continue");
      this.router.navigate(['/admin-login']);

    }
    return this.aas.getToken();
  }

}
