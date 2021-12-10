export class Notice {
  content: string;
  createdAt: string;
  file: string;
  mimetype: string;

  constructor(item: Notice) {
    Object.assign(this, item);
  }
}
