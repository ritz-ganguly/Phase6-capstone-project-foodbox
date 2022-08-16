import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { FoodItems } from '../food-items';

@Component({
  selector: 'app-admin-add-food',
  templateUrl: './admin-add-food.component.html',
  styleUrls: ['./admin-add-food.component.css']
})
export class AdminAddFoodComponent implements OnInit {
  cuisNames = {};
  cuisineToBeAdded = '';
  foodItm = {} as FoodItems;
  constructor(private router: Router, private as: AdminServiceService) { }

  ngOnInit(): void {
    this.as.getUniqueCuisineNames().subscribe(response => this.cuisNames = response);
  }
  onSubmit(form: any) {

    this.as.addFood(this.foodItm, this.cuisineToBeAdded).subscribe(response => {
      if (Boolean(response) === true) {

        this.router.navigate(['/admin-home']);
      }


    });
  }

  goBack() {

    this.router.navigate(['/admin-home']);
  }
}
