import { Component, OnInit } from '@angular/core';
import { ParkingService } from 'src/app/services/parking.service';

@Component({
  selector: 'app-parkings-list',
  templateUrl: './parkings-list.component.html',
  styleUrls: ['./parkings-list.component.css']
})
export class ParkingsListComponent implements OnInit {
  
  parkings: any;
  currentParking = null;
  currentIndex = -1;
  name = '';

  constructor(private parkingService: ParkingService) { }

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

  refreshList(): void{
    this.getAllParkings();
    this.currentIndex = -1;
    this.currentParking = null;
  }

  setActiveParking(parking: any, index: any): void {
    this.currentParking = parking;
    //console.log(`${this.currentParking}`);
    this.currentIndex = index
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



}
