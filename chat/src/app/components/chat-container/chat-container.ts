import { Component, inject } from '@angular/core';
import { ChatList } from '../chat-list/chat-list';
import { ChatTemplate } from "../chat-template/chat-template";
import { DefaultChatMessage } from "../default-chat-message/default-chat-message";
import { NewChatState } from '../../services/new-chat-state';
import { ChatService } from '../../services/chat-service';

@Component({
  selector: 'app-chat-container',
  imports: [ChatList, ChatTemplate, DefaultChatMessage],
  templateUrl: './chat-container.html',
  styleUrl: './chat-container.css',
})
export class ChatContainer {
  private newChatStateService = inject(NewChatState);
  private chatService = inject(ChatService);

  isChatOpen = this.newChatStateService.isOpenChat;
  chatList = this.chatService.getChatHistoryById()
}
