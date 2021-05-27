import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';
import { ApplicationForm } from '../../model';

@Injectable({
  providedIn: 'root'
})

//export class ApplicationFormService {

//  constructor(private http: HttpClient) { }

//  public postApplicationForm(appForm: ApplicationForm) {
//    const url = `${environment.api_endpoint}/application-form`;
//    return this.http.post<ApplicationForm[]>(url, appForm);
//  }
//}


export class ApplicationFormService {

  constructor(private http: HttpClient) { }

  public postApplicationForm(appForm) {
    const url = `${environment.api_endpoint}/application-form`;
    return this.http.post(url, appForm);
  }
}
