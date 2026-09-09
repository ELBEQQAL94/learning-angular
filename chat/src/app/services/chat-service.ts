import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { ChatHistory } from '../models/chat-history.model';
import { mockChatHistory } from '../mock-data/chat-history.mock';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  getChatHistory(): Observable<ChatHistory[]> {
    return of(mockChatHistory).pipe(delay(500));
  }

  getChatHistoryById(id: string): Observable<ChatHistory | undefined> {
    console.log(`chatId: ${id}`);
    return of(mockChatHistory).pipe(
      map(chatHistory => {
        const selectedChat = chatHistory.find(chat => chat.id === id)
        return selectedChat;
      })
    )
  }
}
