export class Standard {
  name: string;
  description: string;
  isActive: boolean;
<<<<<<< HEAD
=======
  courseId: number;
>>>>>>> develop

  constructor(item: Standard) {
    Object.assign(this, item)
  }
}
