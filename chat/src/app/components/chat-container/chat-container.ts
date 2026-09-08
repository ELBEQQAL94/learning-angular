import { Component, inject } from '@angular/core';
import { ChatList } from '../chat-list/chat-list';
import { ChatTemplate } from "../chat-template/chat-template";
import { DefaultChatMessage } from "../default-chat-message/default-chat-message";

@Component({
  selector: 'app-chat-container',
  imports: [ChatList, ChatTemplate, DefaultChatMessage],
  templateUrl: './chat-container.html',
  styleUrl: './chat-container.css',
})
export class ChatContainer {}
