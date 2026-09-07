import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartNewChat } from './start-new-chat';

describe('StartNewChat', () => {
  let component: StartNewChat;
  let fixture: ComponentFixture<StartNewChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartNewChat],
    }).compileComponents();

    fixture = TestBed.createComponent(StartNewChat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
