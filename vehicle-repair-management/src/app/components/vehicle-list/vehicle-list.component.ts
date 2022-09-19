import { IVehicles } from './../models/vehicle';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { ICategories } from '../models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  vehicles: IVehicles[] = [];
  category: ICategories[] = [];
  categories: string[] = [];
  vehicleName: string = '';
  vehicleNames: any[] = [];
  search: boolean = false;
  searchVehicle: IVehicles[] = [];

  flag: boolean = false;

  constructor(
    private _vehicleService: VehicleService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._vehicleService.getVehicles().subscribe((response) => {
      this.vehicles = response;
    });

    this._vehicleService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  getNames(): void {
    if (this.flag === false) {
      for (let i = 0; i < this.vehicles.length; i++) {
        this.vehicleNames.push(this.vehicles[i].vehicleName);
      }
      this.flag = true;
    }
  }

  getCategories(): void {
    for (let i = 0; i < this.categories.length; i++) {
      this.category[i] = {
        categoryId: i + 1,
        categoryName: this.categories[i],
      };
    }

    for (let i = 0; i < this.vehicles.length; i++) {
      let id = this.vehicles[i].categoryId;

      for (let j = 0; j < this.category.length; j++) {
        if (this.category[j].categoryId == id) {
          this.vehicles[i].categoryName = this.category[j].categoryName;
          break;
        }
      }
    }
  }

  goToSearch(): void {
    this.search = true;
    (<HTMLInputElement>document.getElementById('loop')).style.display = 'none';

    this._vehicleService.getSearchVehicle(this.vehicleName).subscribe((res) => {
      this.searchVehicle = res;
    });

    for (let i = 0; i < this.searchVehicle.length; i++) {
      let id = this.searchVehicle[i].categoryId;

      for (let j = 0; j < this.category.length; j++) {
        if (this.category[j].categoryId == id) {
          this.searchVehicle[i].categoryName = this.category[j].categoryName;
          break;
        }
      }
    }
  }

  DeleteVehicle(id) {
    const confirmed = window.confirm('Are you sure you want to delete?');

    if (confirmed) {
      this._vehicleService.DeleteVehicle(id).subscribe((response) => {});
      location.reload();
    }
  }
}
