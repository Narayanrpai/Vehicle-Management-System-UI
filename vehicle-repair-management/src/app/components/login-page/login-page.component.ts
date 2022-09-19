import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginUser } from '../models/login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginUser: ILoginUser = {
    UserName: '',
    Password: '',
  };

  constructor(private _loginService: LoginService, private _router: Router) {}

  ngOnInit(): void {}

  login(): void {
    this._loginService.loginUser(this.loginUser).subscribe(
      (res) => {
        const token = (<any>res).token;
        localStorage.setItem('jwt', token);
        localStorage.setItem('user', this.loginUser.UserName);
        console.log(res);
        this._router.navigate(['vehicle-List']);
      },
      (Error) => {
        console.log(Error);
        alert('Incorrect Login Credentials');
      }
    );
  }

  goToRegister(): void {
    this._router.navigate(['register']);
  }
}
