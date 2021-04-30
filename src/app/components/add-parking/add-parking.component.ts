import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parking } from 'src/app/parking';
import { ParkingService } from 'src/app/services/parking.service';

@Component({
  selector: 'app-add-parking',
  templateUrl: './add-parking.component.html',
  styleUrls: ['./add-parking.component.css']
})
export class AddParkingComponent implements OnInit {

  parking: Parking = new Parking();
  submitted = false;

  constructor(
    private parkingService: ParkingService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveParking(): void {

    this.parkingService.create(this.parking)
    .subscribe(
      data => {
        console.log(data);
        this.parking = new Parking();
        this.submitted = true;
        this.goToList();
      },
      error => {
        console.log(error);
      }
    );
  }

  goToList(){
    this.router.navigate(['/parkings']);
  }


  newParking(): void {
    this.submitted = false;
    this.parking = new Parking();

  }

}


