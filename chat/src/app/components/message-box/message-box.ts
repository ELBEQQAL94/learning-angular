import { DatePipe } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-message-box',
  imports: [DatePipe],
  templateUrl: './message-box.html',
  styleUrl: './message-box.css',
})
export class MessageBox {
  message = input.required<string>();
  date = input.required<string>();
}
