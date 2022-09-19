import { ILoginUser } from '../models/login';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl: string = environment.baseUrl + 'authentication';
  constructor(private http: HttpClient) {}

  public loginUser(loginData: ILoginUser): Observable<HttpResponse<any>> {
    const loginCredentials = JSON.stringify(loginData);
    return this.http.post<HttpResponse<any>>(
      this.baseUrl + '/login',
      loginCredentials,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }
}
