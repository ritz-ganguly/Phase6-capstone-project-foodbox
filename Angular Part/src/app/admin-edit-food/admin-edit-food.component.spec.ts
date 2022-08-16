import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditFoodComponent } from './admin-edit-food.component';

describe('AdminEditFoodComponent', () => {
  let component: AdminEditFoodComponent;
  let fixture: ComponentFixture<AdminEditFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
