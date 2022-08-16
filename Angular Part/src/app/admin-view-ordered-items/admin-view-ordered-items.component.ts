import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { OrderedItems } from '../ordered-items';

@Component({
  selector: 'app-admin-view-ordered-items',
  templateUrl: './admin-view-ordered-items.component.html',
  styleUrls: ['./admin-view-ordered-items.component.css']
})
export class AdminViewOrderedItemsComponent implements OnInit {
  orderedItems: OrderedItems[] = [];
  constructor(private router: Router, private as: AdminServiceService) { }

  ngOnInit(): void {
    this.as.getAllOrderedItems().subscribe(response => this.orderedItems = response);
  }


  goBack() {

    this.router.navigate(['/admin-home']);
  }

}
