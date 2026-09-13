import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ChatHistory } from '../../models/chat-history.model';
import { AppChatHover } from '../../directives/hover/app-chat-hover';

@Component({
  selector: 'app-chat-card',
  imports: [MatIcon, DatePipe, AppChatHover],
  templateUrl: './chat-card.html',
  styleUrl: './chat-card.css',
})
export class ChatCard {
  chat = input.required<ChatHistory>();

}
