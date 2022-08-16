import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCuisinesListComponent } from './admin-cuisines-list.component';

describe('AdminCuisinesListComponent', () => {
  let component: AdminCuisinesListComponent;
  let fixture: ComponentFixture<AdminCuisinesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCuisinesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCuisinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
