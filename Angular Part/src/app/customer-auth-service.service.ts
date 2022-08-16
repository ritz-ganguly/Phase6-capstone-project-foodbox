import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthServiceService {

  constructor() { }

  getToken() {

    return !!sessionStorage.getItem("isCustomerLoggedIn");
  }
}
