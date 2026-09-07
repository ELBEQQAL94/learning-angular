import { Component } from '@angular/core';
import { MessageInput } from "../message-input/message-input";

@Component({
  selector: 'app-chat-template',
  imports: [MessageInput],
  templateUrl: './chat-template.html',
  styleUrl: './chat-template.css',
})
export class ChatTemplate {}
