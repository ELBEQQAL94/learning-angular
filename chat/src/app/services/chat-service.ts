import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ChatHistory } from '../models/chat-history.model';
import { mockChatHistory } from '../mock-data/chat-history.mock';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  // TODO: load chat history data
  getChatHistory(): Observable<ChatHistory[]> {
    return of(mockChatHistory).pipe(delay(500));
  }
}
