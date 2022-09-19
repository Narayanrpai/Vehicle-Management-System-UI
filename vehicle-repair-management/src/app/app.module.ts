import { RegisterService } from './components/services/register.service';
import { LoginService } from './components/services/login.service';
import { AuthGuardService } from './shared/authguard.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VehicleService } from './components/services/vehicle.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { FormsModule } from '@angular/forms';
import { LogoutPageComponent } from './components/logout-page/logout-page.component';
import { SearchPipe } from './searchpipe.pipe';
import { SearchVehicleComponent } from './components/search-vehicle/search-vehicle.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVehicleComponent,
    LoginPageComponent,
    PagenotfoundComponent,
    RegisterPageComponent,
    UpdateVehicleComponent,
    VehicleListComponent,
    LogoutPageComponent,
    SearchPipe,
    SearchVehicleComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [VehicleService, AuthGuardService, LoginService, RegisterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
