import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';
import { Examination } from '../../model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ExaminationService {

  constructor(private http: HttpClient) { }

  public getExamination() {
    const url = `${environment.api_endpoint}/examination`;
    return this.http.get<Examination[]>(url)
      .pipe(
        map(data =>
          data.map(x => new Examination(x))
        )
      );
  }
}

