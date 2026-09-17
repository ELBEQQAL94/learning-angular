import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingMethodPicker } from './shipping-method-picker';

describe('ShippingMethodPicker', () => {
  let component: ShippingMethodPicker;
  let fixture: ComponentFixture<ShippingMethodPicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingMethodPicker],
    }).compileComponents();

    fixture = TestBed.createComponent(ShippingMethodPicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
