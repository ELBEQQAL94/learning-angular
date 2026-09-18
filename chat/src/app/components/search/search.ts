import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  query = signal("");
  
  constructor() {
    effect(() => {
    console.log(`query is changed: ${this.query()}`);
    
  })
  }
}
