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

  _selectedChat = signal<ChatHistory | undefined>(defaultChatHistory);
  _chats = signal<ChatHistory[]>([]);
  _loadingChat = signal(true);

  chats = this._chats.asReadonly();
  selectedChat = this._selectedChat.asReadonly();
  loadingChat = this._loadingChat.asReadonly();

  getChatHistory() {
    const basedPramas = new HttpParams().set('q','test');
    const basedHeaders = new HttpHeaders().set('x-header', 'dev');
    this.http.get("http://localhost:5050/test", {
      params: basedPramas.set('details','enabled'),
      headers: basedHeaders.set('x-header', 'test')
    }).subscribe({
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
