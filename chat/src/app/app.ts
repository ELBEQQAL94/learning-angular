import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { ChatContainer } from './components/chat-container/chat-container';
import { ShippingMethodPicker } from './components/shipping-method-picker/shipping-method-picker';

@Component({
  selector: 'app-root',
  imports: [ShippingMethodPicker],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('chat');
}
