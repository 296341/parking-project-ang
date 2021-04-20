import { Component, OnInit } from '@angular/core';
import { ParkingService } from 'src/app/services/parking.service';

@Component({
  selector: 'app-add-parking',
  templateUrl: './add-parking.component.html',
  styleUrls: ['./add-parking.component.css']
})
export class AddParkingComponent implements OnInit {

  parking = {
    name: '',
    type: '',
    city: ''
  };
  submitted = false;

  constructor(private parkingService: ParkingService) { }

  ngOnInit(): void {
  }

  saveParking(): void {
    const data = {
      name: this.parking.name,
      type: this.parking.type,
      city: this.parking.city
    };
  

    this.parkingService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }


  newParking(): void {
    this.submitted = false;
    this.parking = {
      name: '',
      type: '',
      city: ''
    };

  }

}


