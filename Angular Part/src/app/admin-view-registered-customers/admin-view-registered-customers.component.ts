import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Users } from '../users';

@Component({
  selector: 'app-admin-view-registered-customers',
  templateUrl: './admin-view-registered-customers.component.html',
  styleUrls: ['./admin-view-registered-customers.component.css']
})
export class AdminViewRegisteredCustomersComponent implements OnInit {
  us: Users[] = [];
  constructor(private router: Router, private as: AdminServiceService) { }

  ngOnInit(): void {
    this.as.getCustomers().subscribe(response => this.us = response);
  }
  goBack() {

    this.router.navigate(['/admin-home']);
  }
}
