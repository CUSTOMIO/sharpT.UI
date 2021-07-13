export class PostResult {
    examination: string;
    email: string;
    constructor(item: PostResult) {
      Object.assign(this, item)
    }
  }
  