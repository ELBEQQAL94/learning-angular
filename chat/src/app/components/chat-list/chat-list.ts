import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  imports: [],
  templateUrl: './chat-list.html',
  styleUrl: './chat-list.css',
})
export class ChatList {
  protected readonly chatList = [
    {
      id: '1',
      name: 'jack',
      avatar: 'avatarUrl',
      lastMessage: "see you later!"
    },
    {
      id: '2',
      name: 'bat',
      avatar: 'avatarUrl',
      lastMessage: "Hi!"
    },
    {
      id: '3',
      name: 'ocklacia',
      avatar: 'avatarUrl',
      lastMessage: "ok"
    },
  ]
}
