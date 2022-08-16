import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFinalPageComponent } from './customer-final-page.component';

describe('CustomerFinalPageComponent', () => {
  let component: CustomerFinalPageComponent;
  let fixture: ComponentFixture<CustomerFinalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFinalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFinalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
