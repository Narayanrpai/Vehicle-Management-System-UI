import { IVehicles } from './../models/vehicle';
import { ILoginUser } from '../models/login';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class VehicleService {
  private httpHeaders: HttpHeaders;
  baseUrl: string = environment.baseUrl + 'vehicle';

  constructor(private http: HttpClient) {}

  vehicles = [];

  public getHeaderToken(): HttpHeaders {
    const token = localStorage.getItem('jwt');
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    return this.httpHeaders;
  }

  public getVehicles(): Observable<IVehicles[]> {
    return this.http.get<IVehicles[]>(this.baseUrl + '/getvehicles', {
      headers: this.getHeaderToken(),
    });
  }

  public getCategoryId(name: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/getcategoryId/' + name, {
      headers: this.getHeaderToken(),
    });
  }

  public getCategoryName(id: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/getCategory/' + id, {
      headers: this.httpHeaders,
    });
  }

  public getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/getAllCategories', {
      headers: this.getHeaderToken(),
    });
  }

  public addVehicles(vehicle: IVehicles): Observable<IVehicles> {
    return this.http.post<IVehicles>(this.baseUrl + '/addvehicle', vehicle, {
      headers: this.getHeaderToken(),
    });
  }

  public getSearchVehicle(vehicle: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/searchvehicles/' + vehicle, {
      headers: this.getHeaderToken(),
    });
  }

  public updateVehicle(vehicleId: any, vehicle: any): Observable<any> {
    return this.http.put<any>(
      this.baseUrl + '/updatevehicle/' + vehicleId,
      vehicle,
      {
        headers: this.getHeaderToken(),
      }
    );
  }

  public getVehicleById(vehicleId: any): Observable<any> {
    return this.http.get(this.baseUrl + '/' + vehicleId);
  }

  public DeleteVehicle(vehicleId: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/removevehicle/' + vehicleId);
  }
}
