import { Directive } from '@angular/core';

@Directive({
  selector: '[appAppChatHover]',
  host: {
    class: 'cursor-pointer hover:bg-gray-400 hover:text-black'
  }
})
export class AppChatHover {
  
}
