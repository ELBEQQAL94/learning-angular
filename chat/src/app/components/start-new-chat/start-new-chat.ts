import { AfterViewInit, Component, ElementRef, inject, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { NewChatState } from '../../services/new-chat-state';

@Component({
  selector: 'app-start-new-chat',
  imports: [],
  templateUrl: './start-new-chat.html',
  styleUrl: './start-new-chat.css',
})
export class StartNewChat {
  private newChatStateService = inject(NewChatState);

  startNewChat() {
    this.newChatStateService.isOpenChat();
  }
}
