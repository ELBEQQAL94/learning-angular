import { Component, inject, signal } from '@angular/core';
import { ChatService } from '../../services/chat-service';
import { ChatHistory } from '../../models/chat-history.model';
import { NewChatState } from '../../services/new-chat-state';
import { ChatCard } from '../chat-card/chat-card';

@Component({
  selector: 'app-chat-list',
  imports: [ChatCard],
  templateUrl: './chat-list.html',
  styleUrl: './chat-list.css',
})
export class ChatList {
  private newChatStateService = inject(NewChatState);
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
    this.chatService.getChatHistoryById(chatId).subscribe((data) => {
      console.log(`selectedChat from chat-list: ${JSON.stringify(data)}`);
    });
    this.newChatStateService.openChat();
  }
}
