import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';
import { Standard } from '../../model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class StandardService {

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  public getCourses() {
=======
  public getStandard() {
>>>>>>> develop
    const url = `${environment.api_endpoint}/standard?getActive=true`;
    return this.http.get<Standard[]>(url)
      .pipe(
        map(data =>
          data.map(x => new Standard(x))
        )
      );
  }
<<<<<<< HEAD
}
=======

  public getStandardBycourseId(courseId: number) {
    const url = `${environment.api_endpoint}/standard/${courseId}?getActive=true`;
    return this.http.get<Standard[]>(url)
      .pipe(
        map(data =>
          data.map(x => new Standard(x))
        )
      );
  }
}

>>>>>>> develop
