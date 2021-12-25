export class Course {
  name: string;
  description: string;

  constructor(item: Course) {
    Object.assign(this, item);
  }
}
