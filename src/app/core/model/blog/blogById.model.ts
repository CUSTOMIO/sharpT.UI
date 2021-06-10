export class BlogById {
  published: string;
  updated: string;
  title: string;
  content: string;
  author: object;
  replies: object;

  constructor(item: BlogById) {
    Object.assign(this, item)
  }
}
