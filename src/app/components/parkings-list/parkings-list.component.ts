import { Component, OnInit } from '@angular/core';
import { ParkingService } from 'src/app/services/parking.service';

@Component({
  selector: 'app-parkings-list',
  templateUrl: './parkings-list.component.html',
  styleUrls: ['./parkings-list.component.css']
})
export class ParkingsListComponent implements OnInit {
  
  parkings: any;
  currentPark = '';
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
    this.currentPark = '';
    this.currentIndex = -1;
  }

  setActiveParking(parking: any, index: number): void {
    this.currentPark = parking;
    this.currentIndex = index
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



}
