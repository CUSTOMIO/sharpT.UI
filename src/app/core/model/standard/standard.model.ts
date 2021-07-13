export class Standard {
  name: string;
  description: string;
  isActive: boolean;
  courseId: number;

  constructor(item: Standard) {
    Object.assign(this, item)
  }
}
