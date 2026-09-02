import { ChatHistory } from '../models/chat-history.model';

export const mockChatHistory: ChatHistory[] = [
  {
    id: 'c1',
    participants: [
      {
        id: 'u1',
        first_name: 'Jack',
        last_name: 'Miller',
        username: 'jack',
        avatar_url: 'https://i.pravatar.cc/150?u=u1',
        created_at: '2026-01-10T10:00:00Z',
        updated_at: '2026-01-10T10:00:00Z',
      },
    ],
    messages: [
      { id: 'c1-m1', from: 'u1', content: 'Hey, are you free later?', created_at: '2026-08-30T10:00:00Z' },
      { id: 'c1-m2', from: 'u0', content: 'Yeah, after 6pm works.', created_at: '2026-08-30T10:05:00Z' },
      { id: 'c1-m3', from: 'u1', content: 'see you later!', created_at: '2026-08-30T10:10:00Z' },
    ],
  },
  {
    id: 'c2',
    participants: [
      {
        id: 'u2',
        first_name: 'Batya',
        last_name: 'Cohen',
        username: 'bat',
        avatar_url: 'https://i.pravatar.cc/150?u=u2',
        created_at: '2026-01-12T14:30:00Z',
        updated_at: '2026-01-12T14:30:00Z',
      },
    ],
    messages: [
      { id: 'c2-m1', from: 'u0', content: 'Did you get my email?', created_at: '2026-08-29T09:00:00Z' },
      { id: 'c2-m2', from: 'u2', content: 'Hi!', created_at: '2026-08-29T09:15:00Z' },
    ],
  },
  {
    id: 'c3',
    participants: [
      {
        id: 'u3',
        first_name: 'Olga',
        last_name: 'Klacia',
        username: 'ocklacia',
        avatar_url: 'https://i.pravatar.cc/150?u=u3',
        created_at: '2026-01-15T08:15:00Z',
        updated_at: '2026-01-15T08:15:00Z',
      },
    ],
    messages: [
      { id: 'c3-m1', from: 'u3', content: 'Can you review the PR?', created_at: '2026-08-28T18:00:00Z' },
      { id: 'c3-m2', from: 'u0', content: 'ok', created_at: '2026-08-28T18:20:00Z' },
    ],
  },
  {
    id: 'c4',
    participants: [
      {
        id: 'u4',
        first_name: 'Marco',
        last_name: 'Rossi',
        username: 'marco',
        avatar_url: 'https://i.pravatar.cc/150?u=u4',
        created_at: '2026-01-18T11:45:00Z',
        updated_at: '2026-01-18T11:45:00Z',
      },
    ],
    messages: [
      { id: 'c4-m1', from: 'u0', content: 'Lunch tomorrow?', created_at: '2026-08-31T08:00:00Z' },
      { id: 'c4-m2', from: 'u4', content: 'Sounds good.', created_at: '2026-08-31T08:30:00Z' },
    ],
  },
  {
    id: 'c5',
    participants: [
      {
        id: 'u5',
        first_name: 'Fatima',
        last_name: 'Zahra',
        username: 'fatima',
        avatar_url: 'https://i.pravatar.cc/150?u=u5',
        created_at: '2026-01-20T16:20:00Z',
        updated_at: '2026-01-20T16:20:00Z',
      },
    ],
    messages: [
      { id: 'c5-m1', from: 'u5', content: 'Welcome to the team!', created_at: '2026-08-31T12:00:00Z' },
    ],
  },
];
