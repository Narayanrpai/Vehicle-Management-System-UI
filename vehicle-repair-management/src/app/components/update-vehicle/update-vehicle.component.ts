import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IVehicles } from '../models/vehicle';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css'],
})
export class UpdateVehicleComponent implements OnInit {
  id: any = 0;
  categories: any = [];
  categoryTemp: any = '';
  flag: boolean = false;
  name: any = '';

  vehicle = {
    vehicleName: '',
    vehicleType: '',
    vehicleComplaint: '',
    repairCost: 0,
    categoryId: 1,
  };

  constructor(
    private _vehicleService: VehicleService,
    private activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._vehicleService.getCategories().subscribe(
      (response) => {
        this.categories = response;
      },
      (error) => {
        console.log(error);
      }
    );

    this.activatedRoute.params.subscribe((paramsId) => {
      this.id = paramsId.vehicleId;
    });

    this._vehicleService.getVehicleById(this.id).subscribe((response) => {
      this.vehicle = response;
    });
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

  updateVehicle(id) {
    this._vehicleService
      .getCategoryId(this.categoryTemp)
      .subscribe((response) => {
        this.vehicle.categoryId = response;
        console.log(this.vehicle);
      });
    this._vehicleService.updateVehicle(id, this.vehicle).subscribe(
      () => {
        //console.log(response);
        alert('Vehicle updated successfully');
      },
      (Error) => {
        console.log(Error);
        if (this.flag == false) {
          if (
            window.confirm(
              'Are you sure you want to update the vehicle details?'
            )
          ) {
            this.flag = true;

            this.updateVehicle(id);
            this.updateVehicle(id);
            this._router.navigate(['vehicle-List']);
          } else {
            return;
          }
        }
      }
    );
  }

  Cancel() {
    location.reload();
  }
}
