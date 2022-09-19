import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';
import { IRegisterUser } from '../models/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  registerUser: IRegisterUser = {
    UserName: '',
    Email: '',
    Password: '',
  };
  confirmPassword: any;

  constructor(
    private _registerService: RegisterService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  register(): void {
    this._registerService.registerUser(this.registerUser).subscribe(
      (res) => {
        console.log(res);
        this._router.navigate(['login']);
      },
      (Error) => {
        console.log(Error);
        alert('Error has occured');
      }
    );
  }
}
