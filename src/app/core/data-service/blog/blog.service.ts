import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';
import { BlogById, Blog } from '../../model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  constructor(private http: HttpClient) { }

  public getBlog() {
    const url = `${environment.api_endpoint}/blog`;
    return this.http.get<Blog[]>(url)
      .pipe(
        map(data =>
          data.map(x => new Blog(x))
        )
      );
  }

  public getBlogbyId(id) {
    const url = `${environment.api_endpoint}/blog/${id}`;
  
    return this.http.get<BlogById[]>(url)
        //.pipe(
        //  map(data =>
        //    data.map(x => new BlogById(x))
        //  )
        //);
  }
}
