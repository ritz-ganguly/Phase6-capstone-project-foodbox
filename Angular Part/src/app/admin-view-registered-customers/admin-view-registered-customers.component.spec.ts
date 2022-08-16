import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewRegisteredCustomersComponent } from './admin-view-registered-customers.component';

describe('AdminViewRegisteredCustomersComponent', () => {
  let component: AdminViewRegisteredCustomersComponent;
  let fixture: ComponentFixture<AdminViewRegisteredCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewRegisteredCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewRegisteredCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
