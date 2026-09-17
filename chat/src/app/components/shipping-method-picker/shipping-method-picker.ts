import { Component, linkedSignal, signal, Signal, ChangeDetectionStrategy } from '@angular/core';
import { single } from 'rxjs';

interface ShippingMethod {
  id: string;
  value: string;
  label: string;
}

function getShippingOptions(): Signal<ShippingMethod[]> {
  return signal([
    {
      id: '1',
      value: 'value-1',
      label: 'label-1',
    },
    {
      id: '2',
      value: 'value-2',
      label: 'label-2',
    },
    {
      id: '3',
      value: 'value-3',
      label: 'label-3',
    },
  ]);
}

function getShippingOptions1(): Signal<ShippingMethod[]> {
  return signal([
    {
      id: '1',
      value: 'value-1',
      label: 'label-1',
    },
    {
      id: '2',
      value: 'value-2',
      label: 'label-2',
    },
  ]);
}

@Component({
  selector: 'app-shipping-method-picker',
  imports: [],
  templateUrl: './shipping-method-picker.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './shipping-method-picker.css',
})
export class ShippingMethodPicker {
  shippingOptions = signal(getShippingOptions());

  selectedShippingOption = signal(this.shippingOptions()()[0]);
  // selectedShippingOption = linkedSignal(() => this.shippingOptions()()[0]);

  change(event: Event) {
    console.log(`event: ${(event.target as HTMLSelectElement).value}`);
    const index = (event.target as HTMLSelectElement).value;
    this.selectedShippingOption.set(this.shippingOptions()()[+index]);
  }

  drop() {
    this.shippingOptions.set(getShippingOptions1());
  }
}
