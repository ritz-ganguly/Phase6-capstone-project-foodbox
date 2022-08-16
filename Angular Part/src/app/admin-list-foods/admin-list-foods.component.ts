import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { FoodItems } from '../food-items';
import { FoodItems2 } from '../food-items2';

@Component({
  selector: 'app-admin-list-foods',
  templateUrl: './admin-list-foods.component.html',
  styleUrls: ['./admin-list-foods.component.css']
})
export class AdminListFoodsComponent implements OnInit {
  food: FoodItems[] = [];
  f2: FoodItems2 = new FoodItems2();
  searchText: string = '';
  constructor(private router: Router, private as: AdminServiceService) { }

  ngOnInit(): void {
    this.as.getAllFoodItems().subscribe(response => this.food = response);
  }


  goBack() {
    this.router.navigate(['/admin-home']);
  }

  actionDelete(f: FoodItems) {
    this.f2.foodId = f.foodId;
    this.f2.foodName = f.foodName;
    this.f2.description = f.description;
    this.f2.availableQuantity = f.availableQuantity;
    this.f2.foodPrice = f.foodPrice;
    this.f2.imagePath = f.imagePath;
    this.f2.isAvailable = f.isAvailable;

    this.as.deleteFood(this.f2, String(f.cuisine.cuisineName)).subscribe(response => {
      if (Boolean(response) === true) {
        this.as.getAllFoodItems().subscribe(response => this.food = response);
      }

    });



  }

}
