import { Person } from './person';

export interface Post {
    id: number;
    text: string;
    likes: number;
    createdDate: Date;
    createdBy: Person;
    isDeleted: boolean;
  }

// hello
