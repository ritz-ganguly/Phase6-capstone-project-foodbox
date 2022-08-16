import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListFoodsComponent } from './admin-list-foods.component';

describe('AdminListFoodsComponent', () => {
  let component: AdminListFoodsComponent;
  let fixture: ComponentFixture<AdminListFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListFoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
