import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';
import { Standard, StandardRate } from '../../model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class StandardService {

  constructor(private http: HttpClient) { }

  public getStandard() {
    const url = `${environment.api_endpoint}/standard`;
    return this.http.get<Standard[]>(url)
      .pipe(
        map(data =>
          data.map(x => new Standard(x))
        )
      );
  }

  public getStandardBycourseId(courseId: number) {
    const url = `${environment.api_endpoint}/standard/${courseId}`;
    return this.http.get<Standard[]>(url)
      .pipe(
        map(data =>
          data.map(x => new Standard(x))
        )
      );
  }

  public getStandardByRank() {
    const url = `${environment.api_endpoint}/standardByRank`;
    return this.http.get<Standard[]>(url)
      .pipe(
        map(data =>
          data.map(x => new Standard(x))
        )
      );
  }

  public getStandardRate() {
    const url = `${environment.api_endpoint}/standardRate`;
    return this.http.get<StandardRate[]>(url)
      .pipe(
        map(data =>
          data.map(x => new StandardRate(x))
        )
      );
  }
}
