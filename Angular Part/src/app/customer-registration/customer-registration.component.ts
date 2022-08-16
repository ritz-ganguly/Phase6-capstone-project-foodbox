import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';
import { Users } from '../users';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  customer = {} as Users;
  constructor(private router: Router, private cs: CustomerServiceService) { }

  ngOnInit(): void {
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.key != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onSubmit(form: any) {
    this.cs.registration(this.customer).subscribe(
      response => {
        if (Boolean(response) === true) {

          this.router.navigate(['/customer-login']);
        }
        else {

          alert("Username already exists");
          this.router.navigate(['/customer-registration']);
        }
      }
    );

  }

}
