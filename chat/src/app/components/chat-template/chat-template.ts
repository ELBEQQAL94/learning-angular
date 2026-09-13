import { Component, input } from '@angular/core';
import { MessageInput } from "../message-input/message-input";
import { MessageBox } from "../message-box/message-box";
import { ChatHistory } from '../../models/chat-history.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-chat-template',
  imports: [MessageInput, MessageBox, JsonPipe],
  templateUrl: './chat-template.html',
  styleUrl: './chat-template.css',
})
export class ChatTemplate {
  chats = input<ChatHistory[]>([]);
}
