import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'vehicle-repair-management';
  user = localStorage.getItem('user');

  isAuthenticated() {
    if (localStorage.getItem('user') != null) {
      (<HTMLInputElement>document.getElementById('logout')).style.display =
        'block';
      return true;
    }
    (<HTMLInputElement>document.getElementById('logout')).style.display =
      'none';
    return false;
  }

  showLogout(): void {
    if (this.isAuthenticated()) {
      (<HTMLInputElement>document.getElementById('logout')).style.display =
        'block';
    }
  }

  hideLogout(): void {
    (<HTMLInputElement>document.getElementById('logout')).style.display =
      'none';
  }
}
