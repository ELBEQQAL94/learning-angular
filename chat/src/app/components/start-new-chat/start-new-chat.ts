import { Component, inject } from '@angular/core';
import { NewChatState } from '../../services/new-chat-state';

@Component({
  selector: 'app-start-new-chat',
  imports: [],
  templateUrl: './start-new-chat.html',
  styleUrl: './start-new-chat.css',
})
export class StartNewChat {
  private newChatState = inject(NewChatState);

  startNewChat() {
    this.newChatState.openNewChat();
  }
}
