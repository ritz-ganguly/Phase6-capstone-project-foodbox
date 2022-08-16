import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';
import { Users } from '../users';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  customer = {} as Users;
  constructor(private router: Router, private cs: CustomerServiceService) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  onSubmit(form: any) {

    this.cs.login(this.customer).subscribe(response => {

      if (String(response) !== "failed") {
        sessionStorage.setItem("customerUserName", String(response));
        sessionStorage.setItem("isCustomerLoggedIn", "true");
        sessionStorage.setItem("comingBack", "false");
        this.router.navigate(['/customer-home']);
      }

      if (String(response) === "failed") {

        alert("Invalid credentials");
        this.router.navigate(['/customer-login']);

      }
    });

  }

}
