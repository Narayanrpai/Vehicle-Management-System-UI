import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchVehicleComponent } from './components/search-vehicle/search-vehicle.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthGuardService } from './shared/authguard.service';
import { LogoutPageComponent } from './components/logout-page/logout-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

const routes: Routes = [
  {
    path: 'add-vehicle',
    component: AddVehicleComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'vehicle-List',
    component: VehicleListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'search',
    component: SearchVehicleComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'updateVehicleDetails/:vehicleId',
    component: UpdateVehicleComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'logout', component: LogoutPageComponent },
  {
    path: '',
    redirectTo: 'vehicle-List',
    pathMatch: 'full',
    canActivate: [AuthGuardService],
  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
