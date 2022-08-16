import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartDetails } from '../cart-details';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {
  static fDetails: CartDetails[] = [];
  fd: CartDetails = new CartDetails();
  static callCounter: number = 0;
  //proceedStatus: boolean = false;
  searchText: string = '';


  constructor(private router: Router, private cs: CustomerServiceService) {
    if (String(sessionStorage.getItem("comingBack")) === "true") {
      CustomerHomeComponent.callCounter = 0;
      sessionStorage.setItem("comingBack", "false");
      CustomerHomeComponent.fDetails = [];

    }
    CustomerHomeComponent.callCounter++;

    if (CustomerHomeComponent.callCounter == 1) {
      this.cs.getFoodItems().subscribe(data => {

        for (let i = 0; i < data.length; i++) {

          if (String(data[i].isAvailable) === "yes") {
            this.fd = new CartDetails();

            this.fd.foodId = Number(data[i].foodId);
            this.fd.foodName = String(data[i].foodName);
            this.fd.foodPrice = Number(data[i].foodPrice);
            this.fd.cuisine.cuisineId = Number(data[i].cuisine.cuisineId);
            this.fd.cuisine.cuisineName = String(data[i].cuisine.cuisineName);
            this.fd.description = String(data[i].description);
            this.fd.imagePath = String(data[i].imagePath);
            this.fd.availableQuantity = Number(data[i].availableQuantity);
            this.fd.quantityOrdered = 0;
            CustomerHomeComponent.fDetails.push(this.fd);

          }
        }

      });

    }

  }

  ngOnInit(): void {


  }

  get staticFDetails() {

    return CustomerHomeComponent.fDetails;
  }

  increment(id: number) {
    for (let i = 0; i < CustomerHomeComponent.fDetails.length; i++) {
      if (CustomerHomeComponent.fDetails[i].foodId === id) {
        CustomerHomeComponent.fDetails[i].quantityOrdered++;

      }

    }


    //this.canProceed();
  }


  decrement(id: number) {

    for (let i = 0; i < CustomerHomeComponent.fDetails.length; i++) {
      if (CustomerHomeComponent.fDetails[i].foodId === id) {
        CustomerHomeComponent.fDetails[i].quantityOrdered--;

      }

    }

    //this.canProceed();
  }
  proceed() {

    let c1: CartDetails[] = CustomerHomeComponent.fDetails;
    localStorage.setItem('cart', JSON.stringify(c1));
    this.router.navigate(['/cart-details']);

  }

  canProceed() {
    for (let i = 0; i < CustomerHomeComponent.fDetails.length; i++) {
      if (CustomerHomeComponent.fDetails[i].quantityOrdered > 0) {

        return true;


      }

    }

    return false;



  }
}
