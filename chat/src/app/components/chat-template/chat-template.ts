import { Component } from '@angular/core';
import { MessageInput } from "../message-input/message-input";
import { MessageBox } from "../message-box/message-box";

@Component({
  selector: 'app-chat-template',
  imports: [MessageInput, MessageBox],
  templateUrl: './chat-template.html',
  styleUrl: './chat-template.css',
})
export class ChatTemplate {}
