import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { NewChatState } from '../../services/new-chat-state';

@Component({
  selector: 'app-start-new-chat',
  imports: [],
  templateUrl: './start-new-chat.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './start-new-chat.css',
})
export class StartNewChat {
  private newChatStateService = inject(NewChatState);

  startNewChat() {
    this.newChatStateService.openChat();
  }
}
