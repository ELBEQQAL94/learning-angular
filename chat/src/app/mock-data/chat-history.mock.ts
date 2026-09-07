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
      { id: 'c1-m2', from: 'me', content: 'Yeah, after 6pm works.', created_at: '2026-08-30T10:05:00Z' },
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
      { id: 'c2-m1', from: 'me', content: 'Did you get my email?', created_at: '2026-08-29T09:00:00Z' },
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
      { id: 'c3-m2', from: 'me', content: 'ok', created_at: '2026-08-28T18:20:00Z' },
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
      { id: 'c4-m1', from: 'me', content: 'Lunch tomorrow?', created_at: '2026-08-31T08:00:00Z' },
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
  {
    id: 'c6',
    participants: [
      {
        id: 'u6',
        first_name: 'Liam',
        last_name: 'Brown',
        username: 'liamb',
        avatar_url: 'https://i.pravatar.cc/150?u=u6',
        created_at: '2026-01-21T09:00:00Z',
        updated_at: '2026-01-21T09:00:00Z',
      },
    ],
    messages: [
      { id: 'c6-m1', from: 'u6', content: 'Did you push the changes?', created_at: '2026-08-25T10:00:00Z' },
      { id: 'c6-m2', from: 'me', content: 'Yep, just now.', created_at: '2026-08-25T10:05:00Z' },
    ],
  },
  {
    id: 'c7',
    participants: [
      {
        id: 'u7',
        first_name: 'Sara',
        last_name: 'Nakamura',
        username: 'saran',
        avatar_url: 'https://i.pravatar.cc/150?u=u7',
        created_at: '2026-01-22T09:00:00Z',
        updated_at: '2026-01-22T09:00:00Z',
      },
    ],
    messages: [
      { id: 'c7-m1', from: 'me', content: 'Meeting moved to 3pm', created_at: '2026-08-25T13:00:00Z' },
      { id: 'c7-m2', from: 'u7', content: 'Got it, thanks!', created_at: '2026-08-25T13:02:00Z' },
    ],
  },
  {
    id: 'c8',
    participants: [
      {
        id: 'u8',
        first_name: 'Chen',
        last_name: 'Wei',
        username: 'chenw',
        avatar_url: 'https://i.pravatar.cc/150?u=u8',
        created_at: '2026-01-23T09:00:00Z',
        updated_at: '2026-01-23T09:00:00Z',
      },
    ],
    messages: [
      { id: 'c8-m1', from: 'u8', content: 'Happy birthday!', created_at: '2026-08-24T08:00:00Z' },
      { id: 'c8-m2', from: 'me', content: 'Thank you so much!', created_at: '2026-08-24T08:10:00Z' },
    ],
  },
  {
    id: 'c9',
    participants: [
      {
        id: 'u9',
        first_name: 'Amara',
        last_name: 'Diallo',
        username: 'amarad',
        avatar_url: 'https://i.pravatar.cc/150?u=u9',
        created_at: '2026-01-24T09:00:00Z',
        updated_at: '2026-01-24T09:00:00Z',
      },
    ],
    messages: [
      { id: 'c9-m1', from: 'me', content: 'Can you send the invoice?', created_at: '2026-08-23T11:00:00Z' },
      { id: 'c9-m2', from: 'u9', content: 'Sending it now.', created_at: '2026-08-23T11:15:00Z' },
    ],
  },
  {
    id: 'c10',
    participants: [
      {
        id: 'u10',
        first_name: 'Diego',
        last_name: 'Fernandez',
        username: 'diegof',
        avatar_url: 'https://i.pravatar.cc/150?u=u10',
        created_at: '2026-01-25T09:00:00Z',
        updated_at: '2026-01-25T09:00:00Z',
      },
    ],
    messages: [
      { id: 'c10-m1', from: 'u10', content: 'Game night this Friday?', created_at: '2026-08-22T19:00:00Z' },
      { id: 'c10-m2', from: 'me', content: "I'm in!", created_at: '2026-08-22T19:05:00Z' },
    ],
  },
  {
    id: 'c11',
    participants: [
      {
        id: 'u11',
        first_name: 'Priya',
        last_name: 'Patel',
        username: 'priyap',
        avatar_url: 'https://i.pravatar.cc/150?u=u11',
        created_at: '2026-01-26T09:00:00Z',
        updated_at: '2026-01-26T09:00:00Z',
      },
    ],
    messages: [
      { id: 'c11-m1', from: 'me', content: 'The deploy failed again.', created_at: '2026-08-21T15:00:00Z' },
      { id: 'c11-m2', from: 'u11', content: 'Looking into it now.', created_at: '2026-08-21T15:10:00Z' },
    ],
  },
  {
    id: 'c12',
    participants: [
      {
        id: 'u12',
        first_name: 'Noah',
        last_name: 'Schmidt',
        username: 'noahs',
        avatar_url: 'https://i.pravatar.cc/150?u=u12',
        created_at: '2026-01-27T09:00:00Z',
        updated_at: '2026-01-27T09:00:00Z',
      },
    ],
    messages: [
      { id: 'c12-m1', from: 'u12', content: 'Great job on the demo!', created_at: '2026-08-20T17:00:00Z' },
    ],
  },
  {
    id: 'c13',
    participants: [
      {
        id: 'u13',
        first_name: 'Elena',
        last_name: 'Popescu',
        username: 'elenap',
        avatar_url: 'https://i.pravatar.cc/150?u=u13',
        created_at: '2026-01-28T09:00:00Z',
        updated_at: '2026-01-28T09:00:00Z',
      },
    ],
    messages: [
      { id: 'c13-m1', from: 'me', content: 'Can we reschedule?', created_at: '2026-08-19T09:00:00Z' },
      { id: 'c13-m2', from: 'u13', content: 'Sure, how about Monday?', created_at: '2026-08-19T09:20:00Z' },
    ],
  },
  {
    id: 'c14',
    participants: [
      {
        id: 'u14',
        first_name: 'Kenji',
        last_name: 'Tanaka',
        username: 'kenjit',
        avatar_url: 'https://i.pravatar.cc/150?u=u14',
        created_at: '2026-01-29T09:00:00Z',
        updated_at: '2026-01-29T09:00:00Z',
      },
    ],
    messages: [
      { id: 'c14-m1', from: 'u14', content: 'The design looks great.', created_at: '2026-08-18T12:00:00Z' },
      { id: 'c14-m2', from: 'me', content: 'Glad you like it!', created_at: '2026-08-18T12:05:00Z' },
    ],
  },
  {
    id: 'c15',
    participants: [
      {
        id: 'u15',
        first_name: 'Zara',
        last_name: 'Ahmed',
        username: 'zaraa',
        avatar_url: 'https://i.pravatar.cc/150?u=u15',
        created_at: '2026-01-30T09:00:00Z',
        updated_at: '2026-01-30T09:00:00Z',
      },
    ],
    messages: [
      { id: 'c15-m1', from: 'me', content: 'Are you coming to the conference?', created_at: '2026-08-17T10:00:00Z' },
      { id: 'c15-m2', from: 'u15', content: 'Yes, see you there!', created_at: '2026-08-17T10:15:00Z' },
    ],
  },
  {
    id: 'c16',
    participants: [
      {
        id: 'u16',
        first_name: 'Lucas',
        last_name: 'Silva',
        username: 'lucass',
        avatar_url: 'https://i.pravatar.cc/150?u=u16',
        created_at: '2026-01-31T09:00:00Z',
        updated_at: '2026-01-31T09:00:00Z',
      },
    ],
    messages: [
      { id: 'c16-m1', from: 'u16', content: 'Thanks for the help earlier.', created_at: '2026-08-16T14:00:00Z' },
    ],
  },
  {
    id: 'c17',
    participants: [
      {
        id: 'u17',
        first_name: 'Mei',
        last_name: 'Lin',
        username: 'meilin',
        avatar_url: 'https://i.pravatar.cc/150?u=u17',
        created_at: '2026-02-01T09:00:00Z',
        updated_at: '2026-02-01T09:00:00Z',
      },
    ],
    messages: [
      { id: 'c17-m1', from: 'me', content: 'New feature is live!', created_at: '2026-08-15T09:00:00Z' },
      { id: 'c17-m2', from: 'u17', content: 'Awesome, checking it out.', created_at: '2026-08-15T09:30:00Z' },
    ],
  },
  {
    id: 'c18',
    participants: [
      {
        id: 'u18',
        first_name: 'Omar',
        last_name: 'Hassan',
        username: 'omarh',
        avatar_url: 'https://i.pravatar.cc/150?u=u18',
        created_at: '2026-02-02T09:00:00Z',
        updated_at: '2026-02-02T09:00:00Z',
      },
    ],
    messages: [
      { id: 'c18-m1', from: 'u18', content: 'Can we hop on a call?', created_at: '2026-08-14T11:00:00Z' },
      { id: 'c18-m2', from: 'me', content: 'Sure, give me 5 minutes.', created_at: '2026-08-14T11:02:00Z' },
    ],
  },
  {
    id: 'c19',
    participants: [
      {
        id: 'u19',
        first_name: 'Ingrid',
        last_name: 'Larsen',
        username: 'ingridl',
        avatar_url: 'https://i.pravatar.cc/150?u=u19',
        created_at: '2026-02-03T09:00:00Z',
        updated_at: '2026-02-03T09:00:00Z',
      },
    ],
    messages: [
      { id: 'c19-m1', from: 'me', content: 'Package arrived, thank you!', created_at: '2026-08-13T16:00:00Z' },
      { id: 'c19-m2', from: 'u19', content: "You're welcome :)", created_at: '2026-08-13T16:05:00Z' },
    ],
  },
  {
    id: 'c20',
    participants: [
      {
        id: 'u20',
        first_name: 'Ravi',
        last_name: 'Kumar',
        username: 'ravik',
        avatar_url: 'https://i.pravatar.cc/150?u=u20',
        created_at: '2026-02-04T09:00:00Z',
        updated_at: '2026-02-04T09:00:00Z',
      },
    ],
    messages: [
      { id: 'c20-m1', from: 'u20', content: 'Let me know when you are free.', created_at: '2026-08-12T18:00:00Z' },
    ],
  },
];
