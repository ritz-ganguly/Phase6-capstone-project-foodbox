import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Users } from '../users';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin = {} as Users;

  constructor(private router: Router, private as: AdminServiceService) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }


  onSubmit(form: any) {
    this.as.login(this.admin).subscribe(response => {

      if (String(response) !== "failed") {
        sessionStorage.setItem("adminUserName", String(response));
        sessionStorage.setItem("isAdminLoggedIn", "true");
        this.router.navigate(['/admin-home']);
      }

      if (String(response) === "failed") {

        alert("Invalid credentials");
        this.router.navigate(['/admin-login']);

      }
    });

  }

}
