import { Author } from './user';

export class Post {
  title: string;
  content: string;
  author: Author;
  createdAt: string;
  updatedAt: string;
}

export class PostCreateUpdateInput {
  title: string;
  content: string;
  authorId: number;
}
