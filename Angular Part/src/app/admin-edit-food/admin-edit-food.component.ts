import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { FoodItems } from '../food-items';

@Component({
  selector: 'app-admin-edit-food',
  templateUrl: './admin-edit-food.component.html',
  styleUrls: ['./admin-edit-food.component.css']
})
export class AdminEditFoodComponent implements OnInit {
  id = 0;
  cuisNames = {};

  newCuisineName: String = '';
  foodItm = {} as FoodItems;
  constructor(private route: ActivatedRoute, private as: AdminServiceService,
    private router: Router) {
    this.id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.as.getUniqueCuisineNames().subscribe(response => this.cuisNames = response);
    this.as.getFoodById(this.id).subscribe(response => this.foodItm = response);

  }

  onSubmit(form: any) {
    this.as.updateFoodItem(this.foodItm, String(this.newCuisineName)).subscribe(response => {
      if (Boolean(response) === true) {

        this.router.navigate(['/admin-list-foods']);
      }

    });


  }

  goBack() {

    this.router.navigate(['/admin-home']);
  }

}
