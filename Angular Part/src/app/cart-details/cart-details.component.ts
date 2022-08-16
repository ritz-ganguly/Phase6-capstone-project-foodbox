import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APICart } from '../apicart';
import { CartDetails } from '../cart-details';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  finalCart: CartDetails[] = [];
  apiCD: APICart[] = [];
  constructor(private router: Router, private cs: CustomerServiceService) { }
  stay: boolean = true;




  ngOnInit(): void {

    let cd: CartDetails[] = [];
    cd = JSON.parse(localStorage.getItem('cart') || '[]');
    for (let i = 0; i < cd.length; i++) {
      if (cd[i].quantityOrdered > 0) {

        this.finalCart.push(cd[i]);
      }

    }

    /*
       setInterval(() => {
   
   
         this.stay = this.canProceed();
         console.log(this.stay);
         if (this.stay === false) {
           sessionStorage.setItem("comingBack", "true");
   
           this.router.navigate(['/customer-home']);
         }
   
   
       }, 5000);
   
       */
  }






  increment(id: number) {
    for (let i = 0; i < this.finalCart.length; i++) {
      if (this.finalCart[i].foodId === id) {
        this.finalCart[i].quantityOrdered++;

      }

    }

  }


  decrement(id: number) {
    let idx: number = -1;
    for (let i = 0; i < this.finalCart.length; i++) {
      if (this.finalCart[i].foodId === id) {
        this.finalCart[i].quantityOrdered--;
        if (this.finalCart[i].quantityOrdered === 0) {
          idx = i;
          this.finalCart.splice(idx, 1);
          if (this.finalCart.length === 0) {
            sessionStorage.setItem("comingBack", "true");
            this.router.navigate(['/customer-home']);

          }
        }

      }

    }




    //this.canProceed();
  }



  canProceed() {
    for (let i = 0; i < this.finalCart.length; i++) {
      if (this.finalCart[i].quantityOrdered > 0) {

        return true;


      }

    }

    sessionStorage.setItem("comingBack", "true");
    this.router.navigate(['/customer-home']);
    return false;



  }

  proceed() {
    //sessionStorage.setItem("comingBack", "true");
    //this.router.navigate(['/customer-final-page']);
    console.log(this.finalCart);

    for (let i = 0; i < this.finalCart.length; i++) {
      let f9: APICart = new APICart();

      f9.foodId = this.finalCart[i].foodId;
      f9.quantityOrdered = this.finalCart[i].quantityOrdered;
      f9.foodPrice = this.finalCart[i].foodPrice;
      this.apiCD.push(f9);

    }
    this.cs.purchaseFoods(this.apiCD, String(sessionStorage.getItem("customerUserName"))).
      subscribe(response => {
        if (Boolean(response) === true) {
          sessionStorage.setItem("comingBack", "true");
          this.router.navigate(['/customer-home']);
        }

      });


  }

}
