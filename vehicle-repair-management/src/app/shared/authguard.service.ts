import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private _router: Router) {}

  canActivate() {
    const token = localStorage.getItem('jwt');
    console.log(token);
    if (token) {
      return true;
    }
    this._router.navigate(['login']);
    return false;
  }
}
