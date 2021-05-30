import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';
import { ReachUs } from '../../model';

@Injectable({
  providedIn: 'root'
})

export class ReachUsService {

  constructor(private http: HttpClient) { }

  public postReachus(reachUs: ReachUs) {
    const url = `${environment.api_endpoint}/reachus`;
    return this.http.post<ReachUs[]>(url, reachUs);
  }
}
