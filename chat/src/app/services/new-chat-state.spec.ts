import { TestBed } from '@angular/core/testing';

import { NewChatState } from './new-chat-state';

describe('NewChatState', () => {
  let service: NewChatState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewChatState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
