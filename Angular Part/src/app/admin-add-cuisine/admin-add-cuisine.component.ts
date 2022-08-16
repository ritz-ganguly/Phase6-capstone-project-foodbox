import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Cuisines } from '../cuisines';

@Component({
  selector: 'app-admin-add-cuisine',
  templateUrl: './admin-add-cuisine.component.html',
  styleUrls: ['./admin-add-cuisine.component.css']
})
export class AdminAddCuisineComponent implements OnInit {
  cuis = {} as Cuisines;
  constructor(private router: Router, private as: AdminServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {

    this.as.adminAddCuisine(this.cuis).subscribe(response => {
      if (Boolean(response) === true) {

        this.router.navigate(['/admin-home']);
      }

    });
  }

}
