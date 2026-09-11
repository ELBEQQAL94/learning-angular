import { AfterContentChecked, AfterViewInit, ElementRef, Injectable, OnInit, signal, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewChatState {
  private readonly _isOpenChat = signal(false);
  isOpenChat = this._isOpenChat.asReadonly();

  openChat() {
    this._isOpenChat.set(true);
  }
}
