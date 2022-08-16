import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';
import { OrderedItems } from '../ordered-items';

@Component({
  selector: 'app-customer-view-purchase-history',
  templateUrl: './customer-view-purchase-history.component.html',
  styleUrls: ['./customer-view-purchase-history.component.css']
})
export class CustomerViewPurchaseHistoryComponent implements OnInit {
  ordItems: OrderedItems[] = [];
  constructor(private router: Router, private cs: CustomerServiceService) { }

  ngOnInit(): void {
    this.cs.getPurchaseHistory(String(sessionStorage.getItem("customerUserName"))).
      subscribe(response => this.ordItems = response);
  }

  goBack() {

    this.router.navigate(['/customer-home']);
  }

}
