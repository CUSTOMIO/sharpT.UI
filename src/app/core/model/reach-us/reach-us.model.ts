export class ReachUs {
  email: string;
  message: Text;
  name: string;

  constructor(item: ReachUs) {
    Object.assign(this, item)
  }
}
