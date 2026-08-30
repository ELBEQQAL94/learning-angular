import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { ChatList } from "./components/chat-list/chat-list";

@Component({
  selector: 'app-root',
  imports: [Navbar, ChatList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('chat');
}
