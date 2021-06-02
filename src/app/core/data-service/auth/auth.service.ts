import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

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
}
