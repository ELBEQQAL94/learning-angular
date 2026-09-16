import { inject, Injectable, signal } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { ChatHistory } from '../models/chat-history.model';
import { mockChatHistory } from '../mock-data/chat-history.mock';
import { defaultChatHistory } from '../defaults-data/chat.default';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChatService {

  private http = inject(HttpClient);

  private readonly _selectedChat = signal<ChatHistory | undefined>(defaultChatHistory);
  private readonly _chats = signal<ChatHistory[]>([]);
  private readonly _loadingChat = signal(true);

  readonly chats = this._chats.asReadonly();
  readonly selectedChat = this._selectedChat.asReadonly();
  readonly loadingChat = this._loadingChat.asReadonly();

  getChatHistory() {
    this.http.get("http://localhost:5050").subscribe({
      next: (data) => console.log(`Data fetched: ${JSON.stringify(data)}`),
      error: (err) => console.log(`error: ${JSON.stringify(err)}`)
    });
    of(mockChatHistory).pipe(delay(500)).subscribe((data) => {
      // console.log(`GET chat histories: ${JSON.stringify(data)}`);
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
