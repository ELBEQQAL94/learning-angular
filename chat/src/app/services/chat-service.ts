import { Injectable, signal } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { ChatHistory } from '../models/chat-history.model';
import { mockChatHistory } from '../mock-data/chat-history.mock';
import { defaultChatHistory } from '../defaults-data/chat.default';

@Injectable({
  providedIn: 'root',
})
export class ChatService {

  _selectedChat = signal<ChatHistory | undefined>(defaultChatHistory);
  _chats = signal<ChatHistory[]>([]);
  _loadingChat = signal(true);

  chats = this._chats.asReadonly();
  selectedChat = this._selectedChat.asReadonly();
  loadingChat = this._loadingChat.asReadonly();

  getChatHistory() {
    of(mockChatHistory).pipe(delay(500)).subscribe((data) => {
      console.log(`GET chat histories: ${JSON.stringify(data)}`);
      this._chats.set(data);
      this._loadingChat.set(false);
    });
  }

  getChatHistoryById(id: string) {
    of(mockChatHistory).pipe(
      map(chatHistory => {
        const selectedChat = chatHistory.find(chat => chat.id === id)
        return selectedChat;
      })
    ).subscribe((data) => this._selectedChat.set(data));
  }
}
