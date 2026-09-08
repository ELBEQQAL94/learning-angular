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
    return of(mockChatHistory).pipe(
      delay(500),
      map(chatHistory => chatHistory.find(chat => chat.id))
    );
  }
}
