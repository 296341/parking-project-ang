import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Parking } from 'src/app/parking';
import { ParkingService } from 'src/app/services/parking.service';

@Component({
  selector: 'app-parkings-list',
  templateUrl: './parkings-list.component.html',
  styleUrls: ['./parkings-list.component.css']
})
export class ParkingsListComponent implements OnInit {
  
parkings!: Parking[];

  constructor(
    private parkingService: ParkingService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllParkings();
  }

  getAllParkings(): void {
    this.parkingService.getAll()
    .subscribe(
      data => {
        this.parkings = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
      
    );
  }

  deleteParking(_id: any) {
    this.parkingService.delete(_id)
      .subscribe(
        data => {
          console.log(data);
          this.getAllParkings();
        },
        error => console.log(error));
  }

  parkingDetail(_id: string){
    this.router.navigate(['parkings', _id]);
  }

  updateParking(_id: string){
    this.router.navigate(['update', _id]);
  }

 /* refreshList(): void{
    this.getAllParkings();
    this.currentParking = null;
    this.currentIndex = -1;
  }

  setActiveParking(parking: any, index: any): void {
    this.currentParking = parking;
    this.currentIndex = index;
    //console.log(`${this.currentParking}`);
  }

  searchName(): void {
    this.parkingService.findByName(this.name)
    .subscribe(
      data => {
        this.parkings = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

  }

*/

}
