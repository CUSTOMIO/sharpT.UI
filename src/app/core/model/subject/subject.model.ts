export class Subject {
  name: string;
  description: string;
  isActive: boolean;
  standardId: number;

  constructor(item: Subject) {
    Object.assign(this, item)
  }
}
