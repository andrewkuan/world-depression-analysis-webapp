import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface Blog {
    uid: string;
    timeStamp: any;
    title: string;
    category: string;
    author: string;
    content: string;
    imageURL: string;
    isPublic: boolean;
}
