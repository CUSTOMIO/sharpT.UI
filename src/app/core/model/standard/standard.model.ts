export class Standard {
  id: string;
  name: string;
  description: string;
  courseId: number;

  constructor(item: Standard) {
    Object.assign(this, item);
  }
}
