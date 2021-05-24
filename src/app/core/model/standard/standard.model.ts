export class Standard {
  name: string;
  description: string;
  isActive: boolean;

  constructor(item: Standard) {
    Object.assign(this, item)
  }
}
