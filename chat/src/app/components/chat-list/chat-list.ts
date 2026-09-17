import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ChatService } from '../../services/chat-service';
import { ChatHistory } from '../../models/chat-history.model';
import { NewChatState } from '../../services/new-chat-state';
import { ChatCard } from '../chat-card/chat-card';

@Component({
  selector: 'app-chat-list',
  imports: [ChatCard],
  templateUrl: './chat-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './chat-list.css',
})
export class ChatList {
  private newChatStateService = inject(NewChatState);
  private chatService = inject(ChatService);

  loadingChat = this.chatService.loadingChat;
  chats = this.chatService.chats;

  ngOnInit() {
    this.chatService.getChatHistory();
    console.log(`loadingChat: ${this.loadingChat}`);
  }

  show(chatId: string | undefined | null) {
    if (chatId) {
      this.chatService.getChatHistoryById(chatId);
      this.newChatStateService.openChat();
    } else {
      console.log('Chat Id not exists');
    }
  }
}
