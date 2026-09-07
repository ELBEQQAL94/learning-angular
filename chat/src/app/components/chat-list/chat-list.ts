import { Component, inject, signal } from '@angular/core';
import { ChatService } from '../../services/chat-service';
import { ChatHistory } from '../../models/chat-history.model';
import { MatIcon } from '@angular/material/icon';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chat-list',
  imports: [MatIcon, DatePipe],
  templateUrl: './chat-list.html',
  styleUrl: './chat-list.css',
})
export class ChatList {
  private chatService = inject(ChatService);
  
  chats = signal<ChatHistory[]>([]);
  loading = signal<boolean>(true);

  ngOnInit() {
    this.chatService.getChatHistory().subscribe((data) => {
      this.chats.set(data);
      this.loading.set(false);
    })
  }

  show(chatId: string) {
    console.log(`chat id: ${chatId}`);
  }
}
