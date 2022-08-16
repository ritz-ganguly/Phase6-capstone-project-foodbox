import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Orders } from '../orders';

@Component({
  selector: 'app-admin-view-orders',
  templateUrl: './admin-view-orders.component.html',
  styleUrls: ['./admin-view-orders.component.css']
})
export class AdminViewOrdersComponent implements OnInit {
  orders: Orders[] = [];

  constructor(private router: Router, private as: AdminServiceService) { }

  ngOnInit(): void {

    this.as.getAllOrders().subscribe(response => this.orders = response);
  }
  goBack() {

    this.router.navigate(['/admin-home']);
  }
}
