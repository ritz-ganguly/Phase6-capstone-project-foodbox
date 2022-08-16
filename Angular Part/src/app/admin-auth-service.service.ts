import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthServiceService {

  constructor() { }

  getToken() {

    return !!sessionStorage.getItem("isAdminLoggedIn");
  }
}
