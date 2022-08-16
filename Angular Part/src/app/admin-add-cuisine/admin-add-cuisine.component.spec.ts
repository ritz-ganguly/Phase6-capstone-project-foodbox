import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCuisineComponent } from './admin-add-cuisine.component';

describe('AdminAddCuisineComponent', () => {
  let component: AdminAddCuisineComponent;
  let fixture: ComponentFixture<AdminAddCuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddCuisineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
