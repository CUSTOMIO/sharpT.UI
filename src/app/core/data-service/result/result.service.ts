import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';
import { PostResult } from '../../model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ResultService {

  constructor(private http: HttpClient) { }

//   public postResult(form) {
//     const url = `${environment.api_endpoint}/result`;
//     return this.http.post<PostResult[]>(url, form)
//       .pipe(
//         map(data =>
//           data.map(x => new PostResult(x))
//         )
//       );
//   }

public postResult(form) {
    const url = `${environment.api_endpoint}/result`;
    return this.http.post(url, form)  
  }
}

