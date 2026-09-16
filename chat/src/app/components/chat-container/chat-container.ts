import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ChatList } from '../chat-list/chat-list';
import { ChatTemplate } from "../chat-template/chat-template";
import { DefaultChatMessage } from "../default-chat-message/default-chat-message";
import { NewChatState } from '../../services/new-chat-state';

@Component({
  selector: 'app-chat-container',
  imports: [ChatList, ChatTemplate, DefaultChatMessage],
  templateUrl: './chat-container.html',
  styleUrl: './chat-container.css',
})
export class ChatContainer {
  private newChatStateService = inject(NewChatState);

  showCount = signal(false)
  count = signal(0);
  conditionalCount = computed(() => {
    if (this.showCount()) {
      return `The count is: ${this.count()}`
    } else {
      return "Nothing to see here!";
    }
  })

  isChatOpen = this.newChatStateService.isOpenChat;

  toggle() {
    this.showCount.update(prevValue => !prevValue);
  }
}
