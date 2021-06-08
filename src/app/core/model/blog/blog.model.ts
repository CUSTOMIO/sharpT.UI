export class Blog {
  id: string;
  published: string;
  title: string;
  content: string;

  constructor(item: Blog) {
    Object.assign(this, item)
  }
}
