import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IVehicles } from '../models/vehicle';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'],
})
export class AddVehicleComponent implements OnInit {
  vehicle: IVehicles = {
    vehicleName: '',
    vehicleType: '',
    categoryId: 1,
    categoryName: '',
    vehicleComplaint: '',
    repairCost: 0,
    createdBy: localStorage.getItem('user'),
  };

  categoryTemp: any;
  categories: any[];
  constructor(
    private _vehicleService: VehicleService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  twowheeler() {
    (<HTMLInputElement>document.getElementById('two')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('four')).style.display = 'none';
  }

  fourwheeler() {
    (<HTMLInputElement>document.getElementById('four')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('two')).style.display = 'none';
  }

  addVehicle(): void {
    console.log(this.categoryTemp);
    this._vehicleService.addVehicles(this.vehicle).subscribe(
      (res) => {
        console.log(res);
        alert('Vehicle Added Successfully!!');
        this._router.navigate(['vehicle-List']);
      },
      (Error) => {
        console.log(Error);
        alert('Error has occured');
      }
    );
  }

  getCategory(): void {
    this._vehicleService.getCategories().subscribe(
      (res) => {
        this.categories = res;
        (<HTMLInputElement>document.getElementById('two')).style.display =
          'block';
      },
      (Error) => {
        console.log(Error);
      }
    );
  }

  getCategoryById(): void {
    this._vehicleService.getCategoryId(this.categoryTemp).subscribe(
      (res) => {
        console.log(res);
        this.vehicle.categoryId = res;
      },
      (Error) => {
        console.log(Error);
      }
    );
  }

  Cancel() {
    location.reload();
  }
}
