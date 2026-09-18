import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { ChatContainer } from './components/chat-container/chat-container';
import { Search } from './components/search/search';

@Component({
  selector: 'app-root',
  imports: [Search],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('chat');
}
