import { DatePipe } from '@angular/common';
import { Component, input, signal, ChangeDetectionStrategy } from '@angular/core';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message-box',
  imports: [DatePipe],
  templateUrl: './message-box.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './message-box.css',
})
export class MessageBox {
  message = input.required<Message>();
}
