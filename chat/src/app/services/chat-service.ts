import { Injectable, signal } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { ChatHistory } from '../models/chat-history.model';
import { mockChatHistory } from '../mock-data/chat-history.mock';

@Injectable({
  providedIn: 'root',
})
export class ChatService {

  _selectedChat = signal<ChatHistory[]>([]);
  selectedChat = this._selectedChat.asReadonly();

  getChatHistory(): Observable<ChatHistory[]> {
    return of(mockChatHistory).pipe(delay(500));
  }

  getChatHistoryById(id: string): Observable<ChatHistory | undefined> {
    return of(mockChatHistory).pipe(
      map(chatHistory => {
        const selectedChat = chatHistory.find(chat => chat.id === id)
        return selectedChat;
      })
    )
  }
}
