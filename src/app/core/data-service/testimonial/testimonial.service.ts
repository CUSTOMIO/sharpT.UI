import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';
import { Testimonial } from '../../model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TestimonialService {

  constructor(private http: HttpClient) { }

  public getTestimonial() {
    const url = `${environment.api_endpoint}/testimonial`;
    return this.http.get<Testimonial[]>(url)
      .pipe(
        map(data =>
          data.map(x => new Testimonial(x))
        )
      );
  }

  public postTestimonial(form) {
    const url = `${environment.api_endpoint}/testimonial`;
    return this.http.post(url, form)
  }
}

