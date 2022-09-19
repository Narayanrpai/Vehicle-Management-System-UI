import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
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
