export class Subject {
  allowSubjectSelection: boolean;
  data: Object;

  constructor(item: Subject) {
    Object.assign(this, item)
  }
}
