import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';
import { VerifyOtp } from '../../model';
import { map,catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  public generateOtp(email: string) {
    const model = {
      email: email
    }
    const url = `${environment.api_endpoint}/generate-otp`;
    return this.http.post(url, model)
  }

  public VerifyOtp(form: VerifyOtp) {
    const url = `${environment.api_endpoint}/verify-otp`;
    return this.http.post<VerifyOtp[]>(url, form).
    pipe(
      map((data: any) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
   )
  }
}
