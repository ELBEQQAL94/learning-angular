import { DatePipe } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message-box',
  imports: [DatePipe],
  templateUrl: './message-box.html',
  styleUrl: './message-box.css',
})
export class MessageBox {
  message = input.required<Message>();
}
