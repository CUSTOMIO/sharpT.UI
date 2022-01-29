export class Testimonial {
    review: Text;
    createdAt: String;
    school: String;
    firstName: String;
    lastName: String;
    imageUrl: String;
  
    constructor(item: Testimonial) {
      Object.assign(this, item)
    }
  }