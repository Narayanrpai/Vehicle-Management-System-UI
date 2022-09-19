import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css'],
})
export class LogoutPageComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    this._router.navigate(['login']);
    alert('You have successfully logged out');
  }
}
