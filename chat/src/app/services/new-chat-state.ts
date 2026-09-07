import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewChatState {
  private readonly _isNewChat = signal(false);
  isNewChat = this._isNewChat.asReadonly();

  openNewChat() {
    this._isNewChat.set(true);
  }
}
