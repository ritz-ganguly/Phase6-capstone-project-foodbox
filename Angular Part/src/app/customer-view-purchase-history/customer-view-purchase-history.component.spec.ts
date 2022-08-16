import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewPurchaseHistoryComponent } from './customer-view-purchase-history.component';

describe('CustomerViewPurchaseHistoryComponent', () => {
  let component: CustomerViewPurchaseHistoryComponent;
  let fixture: ComponentFixture<CustomerViewPurchaseHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewPurchaseHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewPurchaseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
