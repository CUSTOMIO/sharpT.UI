export class Subject {
  allowSubjectSelection: boolean;
  data: Object;

  constructor(item: Subject) {
    Object.assign(this, item)
  }
}

export interface AllSubject {
  id: number;
  name: string;
}
