import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingFiltersComponent } from './shopping-filters.component';

describe('ShoppingFiltersComponent', () => {
  let component: ShoppingFiltersComponent;
  let fixture: ComponentFixture<ShoppingFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
