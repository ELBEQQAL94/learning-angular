import {
  Component,
  computed,
  inject,
  OnInit,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ChatList } from '../chat-list/chat-list';
import { ChatTemplate } from '../chat-template/chat-template';
import { DefaultChatMessage } from '../default-chat-message/default-chat-message';
import { NewChatState } from '../../services/new-chat-state';

@Component({
  selector: 'app-chat-container',
  imports: [ChatList, ChatTemplate, DefaultChatMessage],
  templateUrl: './chat-container.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './chat-container.css',
})
export class ChatContainer {
  private newChatStateService = inject(NewChatState);

  isChatOpen = this.newChatStateService.isOpenChat;
}
