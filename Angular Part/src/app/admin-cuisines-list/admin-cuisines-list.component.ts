import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Cuisines } from '../cuisines';

@Component({
  selector: 'app-admin-cuisines-list',
  templateUrl: './admin-cuisines-list.component.html',
  styleUrls: ['./admin-cuisines-list.component.css']
})
export class AdminCuisinesListComponent implements OnInit {
  cuis: Cuisines[] = [];
  constructor(private router: Router, private as: AdminServiceService) { }

  ngOnInit(): void {

    this.as.getAllCuisines().subscribe(response => this.cuis = response);
  }

  goBack() {
    this.router.navigate(['/admin-home']);
  }

  actionDelete(c: Cuisines) {
    this.as.deleteCuisine(c).subscribe(
      response => {

        if (Boolean(response) === true) {
          this.as.getAllCuisines().subscribe(response => this.cuis = response);
        }
      });


  }

}
