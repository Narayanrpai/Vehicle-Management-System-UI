import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegisterUser } from '../models/register';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  baseUrl: string = environment.baseUrl + 'authentication';
  constructor(private http: HttpClient) {}

  public registerUser(user: any): Observable<IRegisterUser> {
    return this.http.post<IRegisterUser>(this.baseUrl + '/register', user);
  }
}
