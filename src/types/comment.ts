import { Person } from './person';

export interface Comment {
    id: number;
    postId: number;
    text: string;
    likes: number;
    createdDate: Date;
    createdBy: Person;
    isDeleted: boolean;
}
