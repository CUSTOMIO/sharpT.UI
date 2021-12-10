import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';
import { Notice } from '../../model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NoticeService {

  constructor(private http: HttpClient) { }

  public getNotice() {
    const url = `${environment.api_endpoint}/notice`;
    return this.http.get<Notice[]>(url)
    .pipe(
        map(data =>
            data.map(x => new Notice(x))
          )
    )
  }
}
