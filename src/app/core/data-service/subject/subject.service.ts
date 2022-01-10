import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';
import { Subject, SubjectCount } from '../../model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SubjectService {

  constructor(private http: HttpClient) { }

  public getSubject() {
    const url = `${environment.api_endpoint}/subject`;
    return this.http.get<Subject[]>(url)
      .pipe(
        map(data =>
          data.map(x => new Subject(x))
        )
      );
  }
  public getSubjectByStandardId(standardId) {
   const url = `${environment.api_endpoint}/subject/${standardId}?getActive=true`;
   return this.http.get<Subject>(url)
  }
  public getSubjectCount() {
    const url = `${environment.api_endpoint}/subjectCountByS`;
    return this.http.get<SubjectCount>(url)
  }
}
