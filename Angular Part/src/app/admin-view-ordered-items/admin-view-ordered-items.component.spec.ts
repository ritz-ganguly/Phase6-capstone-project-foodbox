import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewOrderedItemsComponent } from './admin-view-ordered-items.component';

describe('AdminViewOrderedItemsComponent', () => {
  let component: AdminViewOrderedItemsComponent;
  let fixture: ComponentFixture<AdminViewOrderedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewOrderedItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewOrderedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
