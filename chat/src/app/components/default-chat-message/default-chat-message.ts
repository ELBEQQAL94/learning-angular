import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StartNewChat } from '../start-new-chat/start-new-chat';

@Component({
  selector: 'app-default-chat-message',
  imports: [StartNewChat],
  templateUrl: './default-chat-message.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './default-chat-message.css',
})
export class DefaultChatMessage {}
