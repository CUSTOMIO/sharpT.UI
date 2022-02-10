export class Standard {
  id: string;
  name: string;
  description: string;
  courseId: number;

  constructor(item: Standard) {
    Object.assign(this, item);
  }
}

export class StandardRate {
  standardId: number; 
  rate: number;
  standardName: string;
  subjects: object;

  constructor(item: StandardRate) {
    Object.assign(this, item);
  }
}
