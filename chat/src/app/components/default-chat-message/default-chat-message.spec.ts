import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultChatMessage } from './default-chat-message';

describe('DefaultChatMessage', () => {
  let component: DefaultChatMessage;
  let fixture: ComponentFixture<DefaultChatMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultChatMessage],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultChatMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
