export class Blog {
  id: string;
  published: string;
  title: string;
  content: string;
  url: string;

  constructor(item: Blog) {
    Object.assign(this, item)
  }
}
