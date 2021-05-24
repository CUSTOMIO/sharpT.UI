export class Course {
  name: string;
  description: string;
  isActive: boolean;

  constructor(item: Course) {
    Object.assign(this, item)
  }
}
