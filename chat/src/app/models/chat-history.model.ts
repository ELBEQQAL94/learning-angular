import { Message } from './message.model';
import { User } from './user.model';

export interface ChatHistory {
   id: string | null;
   participants: User[];
   messages: Message[];
}